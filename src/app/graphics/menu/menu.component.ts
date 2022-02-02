import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

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
    {ruta:'/graphics/graphic-af3',texto:'Graphic AF3'},
    {ruta:'/graphics/graphic-t7',texto:'Graphic T7'},
    {ruta:'/graphics/graphic-t8',texto:'Graphic T8'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
