import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Cuenta } from '../models/cuenta';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cuentas: Array<Cuenta>;
  constructor(private service: ServiceService) { 
    this.service = service;
  }

  ngOnInit() {
    var IdUser = localStorage.getItem("IdUser");
    var Id = parseInt(IdUser);
    this.service.getCuentas(Id)
      .subscribe((data : Array<Cuenta>) => {
        this.cuentas= data;
      },
      err => {
        console.log(err);
      });
  }

}
