import { Component, OnInit } from '@angular/core';
import { LoadGraphService } from 'src/app/load-graph.service';

@Component({
  selector: 'app-consecutivo',
  templateUrl: './consecutivo.component.html',
  styleUrls: ['./consecutivo.component.css']
})
export class ConsecutivoComponent implements OnInit {

  constructor(private _loadScript:LoadGraphService) { 
    _loadScript.load(["js/date/orden"]);
  }

  ngOnInit(): void {
  }

}
