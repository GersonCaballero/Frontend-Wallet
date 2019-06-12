import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ServiceService } from '../Service/service.service';

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

  constructor(private service: ServiceService) { 
    this.service = service;
  }

  ngOnInit() {
    this.Name = "";
    this.Email = "";
    this.service.getUser(this.IdUser)
    .subscribe((data: User)=>{
      this.perfil = data;
    });
  }

  Editar(){
    var user = new User();
    user.UserId = this.IdUser;
    user.Name = this.Name;
    user.Email = this.Email;
    user.Password =this.perfil.Password;
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
