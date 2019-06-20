import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { UserLogin } from '../models/user-login';
import { Cuenta } from '../models/cuenta';
import { Ingresos } from '../models/ingresos';
import { Traslados } from '../models/traslados';
import { Egreso } from '../models/egreso';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl: string = "http://localhost:59910/api/";

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  

  getCuentas(userId: number){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}Cuentas?userId=${userId}`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  getCuentaId(AccountId: number){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}Cuenta?AccountId=${AccountId}`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  getUser(userId: number){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}Users?UserId=${userId}`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  getIngresos(accountId : number){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}Ingresos?accountId=${accountId}`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  getIngresosFecha(accountId : number, fi : Date, ff : Date){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}Ingresos?id=${accountId}&fi=${fi}&ff=${ff}`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  getGrafica(AccountId: number){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}Grafica?idAccount=${AccountId}`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)})
  }

  getEgresos(accountId: number){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}Egresos?accountId=${accountId}`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  getEgresosFecha(accountId : number, fi : Date, ff : Date){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}Egresos?id=${accountId}&fi=${fi}&ff=${ff}`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  getTraslados(accountId : number){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}Traslados?accountId=${accountId}`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  getTipoCuenta(){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}tipocuenta`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  postUser(user: User){
    return this.httpClient.post(`${this.baseUrl}CreateUsers`, user);
  }

  postLogin(UserLogin: UserLogin){
    return this.httpClient.post(`${this.baseUrl}login/authenticate`, UserLogin);
  }

  postCuentas(Cuenta: Cuenta){
    var Token = localStorage.getItem("Token");
    return this.httpClient.post(`${this.baseUrl}Cuentas`, Cuenta, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  postIngresos(Ingreso: Ingresos, accountId: number){
    var Token = localStorage.getItem("Token");
    var retorna = this.httpClient.post(`${this.baseUrl}Ingresos?accountId=${accountId}`, Ingreso, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
    return retorna;
  }

  postEgresos(Egreso: Egreso, accountId: number){
    var Token = localStorage.getItem("Token");
    return this.httpClient.post(`${this.baseUrl}Egresos?accountId=${accountId}`, Egreso, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  posTraslados(Traslado : Traslados, idE: number, idR: number){
    var Token = localStorage.getItem("Token");
    return this.httpClient.post(`${this.baseUrl}Traslados?idE=${idE}&IdR=${idR}`, Traslado, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  putUser(User: User, UserId: number){
    var Token = localStorage.getItem("Token");
    return this.httpClient.put(`${this.baseUrl}Users?id=${UserId}`, User, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)})
  }
}