import { Component, OnInit } from '@angular/core';
import { RouletteService } from '../services/roulette.service'
import { TiketService } from '../services/tiket.service'

@Component({
  selector: 'app-spin-desktop',
  templateUrl: './spin-desktop.component.html',
  styleUrls: ['./spin-desktop.component.css']
})
export class SpinDesktopComponent implements OnInit {

  spinStart:any
  timer = 5
  timeout = 0

  totalRotations = 0
  changingCounter = 0

  deisgn = [

    {
      background:"image3",
      numbers:"image11",
      pointer:"image8"
    },
    {
      background:"image5",
      numbers:"image12",
      pointer:"image8"
    },
    {
      background:"image6",
      numbers:"image7",
      pointer:"image9"
    }

  ]


  constructor(private rouletteService:RouletteService,private tiketService:TiketService) { }


  chronoConfig(){
    /*
    this.tiketService.chrono().subscribe((res:any)=>{

      if(res.temp >= 28){

        this.rouletteService.spinOpen = true

      }

    })*/

    this.rouletteService.rouletteDesign = this.deisgn[0]

    if(this.timer > 0 && this.timeout === 0){
      this.timer--
    }else{
      this.timer = 5

      if(this.timeout>0){
        this.timeout--
      }else{
        this.timeout = 60
        if(this.totalRotations <= 1){

          this.totalRotations++

        }else{

          this.totalRotations = 0

          this.changingCounter++

          if(this.changingCounter < this.deisgn.length){

            console.log(this.deisgn[this.changingCounter])

            this.rouletteService.spinOpen = true

            this.rouletteService.rouletteDesign = this.deisgn[this.changingCounter]

          }else{

            this.changingCounter = 0

          }

        }
      }
    }

    window.addEventListener("visibilitychange", () =>{

      if (document.visibilityState === "visible") {

        setTimeout(()=>{
          this.rouletteService.spinOpen = true
          this.spinStart = this.rouletteService.spinOpen
        },500)

      }
    })


    setTimeout(this.chronoConfig.bind(this),1000)

  }


  ngOnInit(): void {

    this.chronoConfig()

  }

}
