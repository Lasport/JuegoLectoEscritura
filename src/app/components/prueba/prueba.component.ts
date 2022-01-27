import { Component, OnInit } from '@angular/core';
import { LoadGraphService } from 'src/app/load-graph.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor(private _loadScript:LoadGraphService) { 
    _loadScript.load(["js/date/prueba"]);
  }

  ngOnInit(): void {
  }

}
