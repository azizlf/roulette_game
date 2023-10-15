import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouletteService {

  spinOpen = false
  angleStoped = "rotate(0deg)"
  selectedNumberWin = 0
  selectedColorNumberWin = "#2cc93b"


  winNumberSelected = 0

  rouletteDesign = {
    background:"",
    numbers:"",
    pointer:""
  }

  constructor() { }

}
