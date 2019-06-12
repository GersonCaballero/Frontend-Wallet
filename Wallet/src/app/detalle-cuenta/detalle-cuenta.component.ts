import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from '../models/cuenta';

@Component({
  selector: 'app-detalle-cuenta',
  templateUrl: './detalle-cuenta.component.html',
  styleUrls: ['./detalle-cuenta.component.css']
})
export class DetalleCuentaComponent implements OnInit {

  cuenta: Cuenta;
  constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) { 
    this.service = service;
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
    var IdUser = parseInt(localStorage.getItem("IdUser"));
    const AccountId : number = Number(+this.route.snapshot.paramMap.get('id'));
    this.service.getCuentaId(AccountId)
    .subscribe((data: Cuenta)=>{
      this.cuenta = data;
      debugger
    })
  }

  Logout(){
    localStorage.removeItem("Token");
    localStorage.removeItem("UserId");
    this.router.navigate(['login']);
  }
}
