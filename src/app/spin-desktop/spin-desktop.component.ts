import { Component, OnInit } from '@angular/core';
import { RouletteService } from '../services/roulette.service'
import { TiketService } from '../services/tiket.service'
import { UsersService } from '../services/users.service'

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


  constructor(private rouletteService:RouletteService,private users:UsersService,private tiketService:TiketService) { }


  chronoConfig(){

    this.tiketService.chrono().subscribe((res:any)=>{

      if(res.temp >= 75){

        this.users.findAdmin(localStorage.getItem("#FSDJIOSFDEZ")).subscribe((res:any)=>{

          this.rouletteService.winNumberSelected = res.resultatRoulette
          this.rouletteService.spinOpen = true
          this.spinStart = this.rouletteService.spinOpen

        })

      }else{
        this.rouletteService.spinOpen = false
      }

    })

    this.rouletteService.rouletteDesign = this.deisgn[0]

    this.spinStart = true

    setTimeout(this.chronoConfig.bind(this),1000)

  }


  ngOnInit(): void {

    this.chronoConfig()

  }

}
