import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Grafica } from '../models/grafica';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  grafica: Array<Grafica>
  id: number;
  constructor(private service: ServiceService, private route: ActivatedRoute) { 
    this.service = service;
    this.route = route;
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'Ingreso'},
    {data: [], label: 'Egreso'}
  ];

  ngOnInit() {
    const AccountId : number = Number(+this.route.snapshot.paramMap.get('id'));
    this.id = AccountId;
    this.service.getGrafica(AccountId)
    .subscribe((data: Array<Grafica>)=>{
      this.grafica = data;
      for(let i = 0; i < data.length; i++){
        this.barChartData[0].data.push(data[i].Ingreso);
        this.barChartData[1].data.push(data[i].Egreso);
        this.barChartLabels.push(data[i].Mes);
      }
    })
  }

}
