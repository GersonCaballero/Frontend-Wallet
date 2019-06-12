import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Cuenta } from '../models/cuenta';
import { Ingresos } from '../models/ingresos';

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
  
  constructor(private service: ServiceService) { 
    this.service = service;
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
    debugger
    var ingre = new Ingresos();
    ingre.CuentaId = this.cuentaSeleccionada.CuentaId;
    ingre.Descripcion = this.Descripcion;
    ingre.FechaIngreso = new Date();
    ingre.MontoActual =this.cuentaSeleccionada.Monto;
    ingre.Monto = parseInt(this.Monto);

    this.Guardar(ingre);
  }

  Guardar(ingreso: Ingresos){
    debugger
    this.service.postIngresos(ingreso, ingreso.CuentaId).subscribe((data: any)=>{
      debugger;
    });
  }

}
