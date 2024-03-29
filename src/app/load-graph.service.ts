import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoadGraphService {

  constructor() { }

  load(archivos:string[]){

    for(let archivo of archivos){
      let script = document.createElement("script");
      script.src = "./assets/" + archivos + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);

    }
  }

}
