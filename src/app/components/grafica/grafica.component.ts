import { Component, OnInit } from '@angular/core';
import { LoadGraphService } from './../../load-graph.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  constructor( private _loadScripts:LoadGraphService )
   {
     _loadScripts.load(["datos"]);
    }

  ngOnInit(): void {
  }

}
