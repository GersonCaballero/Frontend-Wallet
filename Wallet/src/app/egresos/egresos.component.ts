import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../models/cuenta';
import { ServiceService } from '../Service/service.service';
import { Ingresos } from '../models/ingresos';
import { Egreso } from '../models/egreso';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

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
    var egre = new Egreso();
    egre.CuentaId = this.cuentaSeleccionada.CuentaId;
    egre.Descripcion = this.Descripcion;
    egre.FechaEgreso = new Date();
    egre.MontoActual =this.cuentaSeleccionada.Monto;
    egre.Monto = parseInt(this.Monto);

    this.Guardar(egre);
  }

  Guardar(egreso: Egreso){
    debugger
    this.service.postEgresos(egreso, egreso.CuentaId).subscribe((data: any)=>{
      debugger;
    });
  }

}
