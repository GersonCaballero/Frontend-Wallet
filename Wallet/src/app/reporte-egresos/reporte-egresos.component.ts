import { Component, OnInit } from '@angular/core';
import { Egreso } from '../models/egreso';
import { ServiceService } from '../Service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reporte-egresos',
  templateUrl: './reporte-egresos.component.html',
  styleUrls: ['./reporte-egresos.component.css']
})
export class ReporteEgresosComponent implements OnInit {

  egresos: Array<Egreso>
  id: number;
  constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) { 
    this.service = service;
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
    const AccountId : number = Number(+this.route.snapshot.paramMap.get('id'));
    this.id = AccountId;
    this.service.getIngresos(AccountId)
    .subscribe((data: Array<Egreso>)=>{
      this.egresos = data;
      debugger
    })
  }

  Logout(){
    localStorage.removeItem("Token");
    localStorage.removeItem("UserId");
    this.router.navigate(['']);
  }

}
