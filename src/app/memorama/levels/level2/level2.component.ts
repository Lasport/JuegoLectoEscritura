import { Component, OnInit } from '@angular/core';
import { LoadGraphService } from 'src/app/load-graph.service';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {

  constructor(private _loadScript:LoadGraphService) { 
    _loadScript.load(["js/date/g-cartas"]);
  }

  ngOnInit(): void {
  }

}
