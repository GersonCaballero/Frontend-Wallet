import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user-login';
import { ServiceService } from '../Service/service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLogin;

  constructor(private service: ServiceService, private route: Router) { 
    this.service = service;
    this.route = route;
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form ?: NgForm){
    if(form != null){
      form.resetForm();
    }

    this.user = {
      Username : "",
      Password : ""
    }
  }

  Login(form: NgForm){
    debugger
    this.service.postLogin(form.value).subscribe((data: any) =>{
      localStorage.setItem("Token", data.Token);
      localStorage.setItem("IdUser", data.IdUser);
      this.route.navigate(['Home']);
    });
  }

}
