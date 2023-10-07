import { Component , OnInit } from '@angular/core';
import { RouletteService } from './services/roulette.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private rouletteService:RouletteService){}

  ngOnInit(): void {

    var timer = 5
    var timeout = 0
    

    setInterval(()=>{

      if(timer > 0 && timeout === 0){
        timer--
      }else{
        timer = 5
        if(timeout>0){
          timeout--
        }else{
          timeout = 30
          this.rouletteService.spinOpen = true
          

        }
      }

    },1000)

  }
}
