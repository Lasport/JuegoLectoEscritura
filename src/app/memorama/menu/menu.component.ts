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
    {ruta:'/memorama/level1',texto:'Nivel1'},
    {ruta:'/memorama/level2',texto:'Nivel2'},
    {ruta:'/memorama/level3',texto:'Nivel3'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
