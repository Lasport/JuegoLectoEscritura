import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';


@Component({
  selector: 'app-graphic-t7',
  templateUrl: './graphic-t7.component.html',
  styleUrls: ['./graphic-t7.component.css']
})
export class GraphicT7Component implements OnInit {


  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [.172, .129, .150, .163, .136, .152, .150, .140, .160, .142 ],
        label: 'Theta',
        backgroundColor: '#002d5f',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  };


  public lineChartData1: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [.172, .129, .150, .163, .136, .152, .150, .140, .160, .142 ],
        label: 'BetaH',
        backgroundColor: '#00cee6',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  };

  public lineChartData2: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [.172, .129, .150, .163, .136, .152, .150, .140, .160, .142 ],
        label: 'Gamma',
        backgroundColor: '#8affba',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  };

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public lineChartOptions: ChartConfiguration['options'] = {

  };

  public lineChartType: ChartType = 'line';


  constructor() { }

  ngOnInit(): void {
  }

}
