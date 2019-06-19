import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingresos } from '../models/ingresos';

@Component({
  selector: 'app-reporte-ingresos',
  templateUrl: './reporte-ingresos.component.html',
  styleUrls: ['./reporte-ingresos.component.css']
})
export class ReporteIngresosComponent implements OnInit {

  ingresos: Array<Ingresos>
  id: number;
  constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) { 
    this.service = service;
    this.route = route;
  }

  ngOnInit() {
    const AccountId : number = Number(+this.route.snapshot.paramMap.get('id'));
    this.id = AccountId;
    this.service.getIngresos(AccountId)
    .subscribe((data: Array<Ingresos>)=>{
      this.ingresos = data;
      debugger
    })
  }

  Logout(){
    localStorage.removeItem("Token");
    localStorage.removeItem("UserId");
    this.router.navigate(['']);
  }

}
