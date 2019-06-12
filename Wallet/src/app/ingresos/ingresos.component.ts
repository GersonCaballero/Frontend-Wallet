import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Cuenta } from '../models/cuenta';
import { Ingresos } from '../models/ingresos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  seleccionado : string;
  cuentaSeleccionada : Cuenta;
  cuentas: Array<Cuenta>;
  Descripcion : string;
  Monto: string;
  messages:string;
  
  constructor(private service: ServiceService, private router: Router) { 
    this.service = service;
    this.router = router;
  }

  

  ngOnInit() {
    this.seleccionado = "";
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

  onClick(cuenta: Cuenta){
    
    if(this.messages == "Seleccione una cuenta."){
      this.messages = "";
    }
    this.cuentaSeleccionada = cuenta;
    if(this.seleccionado != ""){
      var input = document.getElementById(this.seleccionado);

    input.style.backgroundColor = "white";

    this.seleccionado = this.cuentaSeleccionada.CuentaId.toString();

    var input = document.getElementById(this.seleccionado);

    input.style.backgroundColor = "lightblue";
    }
    else{
      this.seleccionado = this.cuentaSeleccionada.CuentaId.toString();

      var input = document.getElementById(this.seleccionado);

      input.style.backgroundColor = "lightblue";
    }
  }

  botonSave(){
    if(this.cuentaSeleccionada === undefined){
      this.messages = "Seleccione una cuenta.";
    }
    var ingre = new Ingresos();
    ingre.CuentaId = this.cuentaSeleccionada.CuentaId;
    ingre.Descripcion = this.Descripcion;
    ingre.FechaIngreso = new Date();
    ingre.MontoActual =this.cuentaSeleccionada.Monto;
    ingre.Monto = parseInt(this.Monto);

    this.Guardar(ingre);
  }

  Guardar(ingreso: Ingresos){
    this.service.postIngresos(ingreso, ingreso.CuentaId).subscribe((data: any)=>{
      if(data.message != "El ingreso se realizo con exito."){
        this.messages = data.message;
        return;
      }
    
      this.router.navigate(['Home']);
    },
    (error : any) => {
      this.messages = error.status + '-' + error.statusText;
    });
  }

  Logout(){
    localStorage.removeItem("Token");
    localStorage.removeItem("UserId");
    this.router.navigate(['login']);
  }

}
