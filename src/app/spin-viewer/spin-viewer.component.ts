import { Component, OnInit } from '@angular/core';
import { RouletteService } from '../services/roulette.service'

@Component({
  selector: 'app-spin-viewer',
  templateUrl: './spin-viewer.component.html',
  styleUrls: ['./spin-viewer.component.css']
})
export class SpinViewerComponent implements OnInit {

  element:any
  
  constructor(private rouletteService:RouletteService){}
  

  ngOnInit(): void {

    setInterval(()=>{
      
      this.element = document.querySelector(".spin-viewer")

      this.element.style.transform = this.rouletteService.angleStoped

      this.element = document.querySelector(".index-viewer")

      this.element.innerText = this.rouletteService.selectedNumberWin

      this.element.style.backgroundColor = this.rouletteService.selectedColorNumberWin

    },1000)


  }

}
