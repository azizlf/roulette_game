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

    var timer = 60
    var timeout = 0

    var interval = setInterval(()=>{
      if(this.users.user.id != ""){
        clearInterval(interval)
        this.users.findUser(this.users.user.id).subscribe((res:any)=>{
          console.log(res)
          setInterval(()=>{

            if(timer > 0 && timeout === 0){
              timer--
            }else{
              timer = 60
              if(timeout>0){
                timeout--
              }else{
                timeout = 45
                //this.rouletteService.spinOpen = true
              }
            }

          },1000)
        })
      }
    },10)

  }
}
