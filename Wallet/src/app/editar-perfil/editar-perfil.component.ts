import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  perfil: User;
  IdUser = parseInt(localStorage.getItem("IdUser"));
  Name: string;
  Email: string;
  messages: string;

  constructor(private service: ServiceService, private router: Router) { 
    this.service = service;
    this.Name="";
    this.Email="";
  }

  ngOnInit() {
    this.service.getUser(this.IdUser)
    .subscribe((data: User)=>{
      this.perfil = data;
    });
  }

  Editar(){
    var user = new User();
    user.UserId = this.IdUser;
    user.Name = this.Name;
    if(user.Name === ""){
      user.Name = this.perfil.Name;
    }
    user.Email = this.Email;
    if(user.Email === ""){
      user.Email = this.perfil.Email;
    }
    user.Password =this.perfil.Password;
    debugger
    this.Enviar(user);
  }

  Enviar(user: User){
    this.service.putUser(user, this.IdUser)
    .subscribe((data: any)=>{
      if(data.message != "Usuario editado con exito."){
        this.messages = data.message;
        return;
      }
    
      this.router.navigate(['Perfil']);
    },
    (error : any) => {
      this.messages = error.status + '-' + error.statusText;
    });
  }

}
