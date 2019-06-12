import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ServiceService } from '../Service/service.service';
import { NgForm } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  messages: string;
  confirmcontrasena: string;

  constructor(private service: ServiceService, private router: Router) {
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
    this.confirmcontrasena="";
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    this.user = {
      UserId: 0,
      Email: "",
      Name: "",
      Password: ""
    }
  }

  Guardar(form: NgForm) {
    debugger
    if(this.confirmcontrasena != this.user.Password){
      this.messages = "Las contrasenas no coinciden.";
      return; 
    }
    this.service.postUser(form.value)
      .subscribe((data: any) => {
        if (data.message != "Usuario creado con exito!!") {
          this.messages = data.message;
          return;
        }

        this.router.navigate(['login']);
      },
        (error: any) => {
          this.messages = error.status + '-' + error.statusText;
        });
  }
}
 