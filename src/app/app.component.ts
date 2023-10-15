import { Component , OnInit } from '@angular/core';
import { TiketService } from './services/tiket.service'
import { UsersService } from './services/users.service'
import { RouletteService } from './services/roulette.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private rouletteService:RouletteService,private users:UsersService,private tiketService:TiketService){}

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
          timeout = 60
        }
      }

    },1000)

  }
}
