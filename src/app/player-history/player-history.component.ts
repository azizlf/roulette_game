import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-history',
  templateUrl: './player-history.component.html',
  styleUrls: ['./player-history.component.css']
})
export class PlayerHistoryComponent implements OnInit {
  
  isLoading = true

  history:any = "nothing"

  constructor(private usersService:UsersService,private router:Router) { }

  historyUser(id:any){

    this.usersService.findUser(id).subscribe((res:any)=>{

      this.history = []

      for (var i = res.tikets.length - 1 ; i >= 0; i--) {

        if(res.tikets[i].realTime){

          this.history.push(res.tikets[i])

        }

      }

      var interval = setInterval(()=>{
        if(this.history != "nothing"){
          setTimeout(()=>{
            this.isLoading = false
            clearInterval(interval)
          },150)
        }
      },2)

    })

  }

  ngOnInit(): void {
    if(this.usersService.user.id === ""){

      this.router.navigate(['/'])

    }else{
      this.historyUser(this.usersService.user.id)
    }
  }

}
