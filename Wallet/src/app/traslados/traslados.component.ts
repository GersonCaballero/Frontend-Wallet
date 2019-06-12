import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Cuenta } from '../models/cuenta';
import { Traslados } from '../models/traslados';

@Component({
  selector: 'app-traslados',
  templateUrl: './traslados.component.html',
  styleUrls: ['./traslados.component.css']
})
export class TrasladosComponent implements OnInit {

  seleccionadoEnvia: string;
  seleccionadoRecibe: string;
  cuentasE: Array<Cuenta>;
  cuentasR: Array<Cuenta>;
  cuentasSeleccionadaE: Cuenta;
  cuentasSeleccionadaR: Cuenta;
  Descripcion: string;
  Monto: string;

  constructor(private service : ServiceService) {
    this.service = service;
   }
  

  ngOnInit() {
    this.seleccionadoEnvia = "";
    this.seleccionadoRecibe = "";
    var IdUser = localStorage.getItem("IdUser");
    var Id = parseInt(IdUser);
    this.service.getCuentas(Id)
      .subscribe((data : Array<Cuenta>) => {
        this.cuentasE= data;
        this.cuentasR= data;
      },
      err => {
        console.log(err);
      });
  }

  onClickEnvia(cuenta: Cuenta){
    this.cuentasSeleccionadaE = cuenta;
    if(this.seleccionadoEnvia != ""){
      var input = document.getElementById(this.seleccionadoEnvia);

    input.style.backgroundColor = "white";

    this.seleccionadoEnvia = this.cuentasSeleccionadaE.CuentaId.toString()+"e";

    var input = document.getElementById(this.seleccionadoEnvia);

    input.style.backgroundColor = "lightblue";
    }
    else{
      this.seleccionadoEnvia = this.cuentasSeleccionadaE.CuentaId.toString()+"e";

      var input = document.getElementById(this.seleccionadoEnvia);

      input.style.backgroundColor = "lightblue";
    }
  }

  onClickRecibe(cuenta: Cuenta){
    this.cuentasSeleccionadaR = cuenta;
    if(this.seleccionadoRecibe != ""){
      var input = document.getElementById(this.seleccionadoRecibe);

    input.style.backgroundColor = "white";

    this.seleccionadoRecibe = this.cuentasSeleccionadaR.CuentaId.toString()+"r";

    var input = document.getElementById(this.seleccionadoRecibe);

    input.style.backgroundColor = "lightblue";
    }
    else{
      this.seleccionadoRecibe = this.cuentasSeleccionadaR.CuentaId.toString()+"r";

      var input = document.getElementById(this.seleccionadoRecibe);

      input.style.backgroundColor = "lightblue";
    }
  }

Guardar(){
  this.Descripcion = "Traslado de cuenta " + this.cuentasSeleccionadaE.Nombre +" a cuenta " +this. cuentasSeleccionadaR.Nombre + "." 
  var Tras = new Traslados();
  Tras.CuentaId = this.cuentasSeleccionadaE.CuentaId;
  Tras.Descripcion = this.Descripcion;
  Tras.FechaTraslado = new Date();
  Tras.Monto = parseInt(this.Monto);
  Tras.MontoActual = this.cuentasSeleccionadaE.Monto;
  debugger

  this.Enviar(Tras);
}

Enviar(Traslado: Traslados){
  var idE = this.cuentasSeleccionadaE.CuentaId;
  var idR = this.cuentasSeleccionadaR.CuentaId;
  debugger
  this.service.posTraslados(Traslado, idE, idR)
  .subscribe((data: any)=>{
    var message = data;
    debugger
  });
}
  
}
