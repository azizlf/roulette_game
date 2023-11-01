import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from "../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class RouletteService {

  openSpin = true
  angleStoped = "rotate(0deg)"
  selectedNumberWin = 0
  selectedColorNumberWin = "#2cc93b"

  api = environment.API+"/Roulette"

  winNumberSelected = 0

  rouletteDesign = {
    background:"",
    numbers:"",
    pointer:""
  }


  constructor(private http:HttpClient) { }

  getNumSpinWin(id:any){

    return this.http.get(this.api+"/re/"+id)

  }

}
