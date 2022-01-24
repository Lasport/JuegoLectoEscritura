import { Component, OnInit } from '@angular/core';
import { LoadGraphService } from 'src/app/load-graph.service';

@Component({
  selector: 'app-juego-gato',
  templateUrl: './juego-gato.component.html',
  styleUrls: ['./juego-gato.component.css']
})
export class JuegoGatoComponent implements OnInit {

  constructor(private _loadScript:LoadGraphService) { 
    _loadScript.load(["js/date/gato"]);
  }

  ngOnInit(): void {
  }

}
