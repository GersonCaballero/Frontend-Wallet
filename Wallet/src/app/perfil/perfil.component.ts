import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: User;
  constructor(private service: ServiceService) {
    this.service = service;
   }

  ngOnInit() {
    var IdUser = parseInt(localStorage.getItem("IdUser"));
    this.service.getUser(IdUser)
    .subscribe((data: User)=>{
      this.perfil = data;
    })
  }

}
