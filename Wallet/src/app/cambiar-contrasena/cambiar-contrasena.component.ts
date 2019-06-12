import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ServiceService } from '../Service/service.service';

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

  constructor(private service: ServiceService) { 
    this.service = service;
  }

  ngOnInit() {
    this.Password = "";
    this.service.getUser(this.IdUser)
    .subscribe((data: User)=>{
      this.perfil = data;
    });
  }

  Editar(){
    debugger
    if(this.perfil.Password != this.Password){
      return;
    }

    if(this.newPassword != this.confirmPassword){
      return;
    }

    var user = new User();
    user.UserId = this.IdUser;
    user.Name = this.perfil.Name;
    user.Email = this.perfil.Email;
    user.Password =this.newPassword;
    debugger
    this.Enviar(user);  
  }

  Enviar(user: User){
    this.service.putUser(user, this.IdUser)
    .subscribe((data: any)=>{
      var message = data.message;
    })
  }

}
