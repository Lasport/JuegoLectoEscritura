import { Component, OnInit } from '@angular/core';
import { LoadGraphService } from 'src/app/load-graph.service';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css']
})
export class Level3Component implements OnInit {

  constructor(private _loadScript:LoadGraphService) { 
    _loadScript.load(["js/date/orden"]);
  }
  ngOnInit(): void {
  }

}
