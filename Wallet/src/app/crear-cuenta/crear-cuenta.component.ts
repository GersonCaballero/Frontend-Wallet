import { Component, OnInit } from '@angular/core';
import { Tipocuenta } from '../models/tipocuenta';
import { ServiceService } from '../Service/service.service';
import { Cuenta } from '../models/cuenta';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  tiposCuentas: Array<Tipocuenta>;
  tipocuentaSeleccionada: Tipocuenta;
  seleccionado: string;
  NombreCuenta: string;

  constructor(private service: ServiceService) { 
    this.service = service;
  }

  ngOnInit() {
    this.seleccionado = "";
    this.service.getTipoCuenta()
    .subscribe((data: Array<Tipocuenta>)=>{
      this.tiposCuentas = data;
    });
  }

  onClick(tipocuenta: Tipocuenta){
    this.tipocuentaSeleccionada = tipocuenta;
    debugger
    if(this.seleccionado != ""){
      var input = document.getElementById(this.seleccionado);

    input.style.backgroundColor = "white";

    this.seleccionado = this.tipocuentaSeleccionada.TipoCuentaId.toString();

    var input = document.getElementById(this.seleccionado);

    input.style.backgroundColor = "lightblue";
    }
    else{
      this.seleccionado = this.tipocuentaSeleccionada.TipoCuentaId.toString();

      var input = document.getElementById(this.seleccionado);

      input.style.backgroundColor = "lightblue";
    }
  }

  Guardar(){
    debugger
    var UserId = parseInt(localStorage.getItem("IdUser"));
    var cuenta = new Cuenta();
    cuenta.UserId = UserId;
    cuenta.TipoCuentaId = this.tipocuentaSeleccionada.TipoCuentaId;
    cuenta.Nombre = this.NombreCuenta;
    cuenta.Monto = 0;
    debugger
    this.Enviar(cuenta);
  }

  Enviar(cuenta: Cuenta){
    debugger
    this.service.postCuentas(cuenta)
    .subscribe((data: any)=>{
      var message = data.message;
    })
  }
}
