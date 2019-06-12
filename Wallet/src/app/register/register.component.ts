import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ServiceService } from '../Service/service.service';
import { NgForm } from '@angular/forms';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User;

  constructor(private service: ServiceService){ 
    this.service = service;
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form ?: NgForm){
    if(form != null){
      form.resetForm();
    }

    this.user = {
      Email: "",
      Name: "",
      Password: ""
    }
  }

  Guardar(form : NgForm){
    debugger
    this.service.postUser(form.value).subscribe((data: any)=>
    {
      debugger
    });
  }

}
