import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoadGraphService } from 'src/app/load-graph.service';

@Component({
  selector: 'app-sumas',
  templateUrl: './sumas.component.html',
  styleUrls: ['./sumas.component.css']
})
export class SumasComponent implements OnInit {

  constructor(private _loadScript:LoadGraphService) { 
    _loadScript.load(["js/date/suma"]);
  }

  ngOnInit(): void {
  }

}
