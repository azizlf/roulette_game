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

  constructor(private rouletteService:RouletteService,private tiketService:TiketService) { }


  chronoConfig(){

    this.tiketService.chrono().subscribe((res:any)=>{

      if(res.temp >= 28){

        this.spinStart = true

      }else{
        this.spinStart = this.rouletteService.spinOpen
      }

    })

    setTimeout(this.chronoConfig.bind(this),1000)

  }


  ngOnInit(): void {

    this.chronoConfig()

  }

}
