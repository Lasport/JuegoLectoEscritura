import { Component, OnInit } from '@angular/core';
interface selecItem{
  ruta:string,
  texto:string
  }
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  selec:selecItem[] = [
    {ruta:'/memorama/level1',texto:'SELECCIONA EL NIVEL -- > 1'},
    {ruta:'/memorama/level2',texto:'SELECCIONA EL NIVEL -- > 2'},
    {ruta:'/memorama/level3',texto:'SELECCIONA EL NIVEL -- > 3'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
