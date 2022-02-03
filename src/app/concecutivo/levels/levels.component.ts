import { Component, OnInit } from '@angular/core';
import { LoadGraphService } from 'src/app/load-graph.service';
@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {

  constructor(private _loadScript:LoadGraphService) { 
    _loadScript.load(["js/date/orden1"]);
  }

  ngOnInit(): void {
  }

}
