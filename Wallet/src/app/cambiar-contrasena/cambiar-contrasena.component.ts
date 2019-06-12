import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent implements OnInit {

  perfil: User;
  IdUser = parseInt(localStorage.getItem("IdUser"));
  newPassword: string;
  Password: string;
  confirmPassword: string;
  messages: string;

  constructor(private service: ServiceService, private router: Router) {
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
    this.Password = "";
    this.service.getUser(this.IdUser)
      .subscribe((data: User) => {
        this.perfil = data;
      });
  }

  Editar() {
    debugger
    if (this.perfil.Password != this.Password) {
      this.messages = "La contrasena actual es incorrecta.";
      return;
    }

    if (this.newPassword != this.confirmPassword) {
      this.messages = "Las contrasenas no coinciden.";
      return;
    }

    var user = new User();
    user.UserId = this.IdUser;
    user.Name = this.perfil.Name;
    user.Email = this.perfil.Email;
    user.Password = this.newPassword;
    debugger
    this.Enviar(user);
  }

  Enviar(user: User) {
    this.service.putUser(user, this.IdUser)
      .subscribe((data: any) => {
        if (data.message != "Usuario editado con exito.") {
          this.messages = data.message;
          return;
        }

        this.router.navigate(['Perfil']);
      },
        (error: any) => {
          this.messages = error.status + '-' + error.statusText;
        });
  }

  Logout(){
    localStorage.removeItem("Token");
    localStorage.removeItem("UserId");
    this.router.navigate(['login']);
  }
}
