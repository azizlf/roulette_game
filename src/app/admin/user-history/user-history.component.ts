import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  balance = ""

  history:any = "nothing"

  isLoading = true

  constructor(private usersService:UsersService,private router: Router,private route:ActivatedRoute) { }

  historyUser(id:any){

    this.usersService.findUser(id).subscribe((res:any)=>{

      this.balance = res.solde+""
      
      this.usersService.findUser(id).subscribe((res:any)=>{

        this.history = []


        res.tikets.forEach((tiket:any)=>{

          if(!tiket.realTime){
            
            this.history.push(tiket)

          }


        })

        var interval = setInterval(()=>{
          if(this.history != "nothing"){
            setTimeout(()=>{
              this.isLoading = false
              clearInterval(interval)
            },150)
          }
        },2)

      })

    })

  }

  returnFromPage(){

    if(this.usersService.user.type === "admin"){
      this.usersService.usersShowAllList = true
      this.router.navigate(['/admin/management/users/'])
    }else{
      if(this.usersService.adminOpenedForCheckUsersList === ""){

        this.usersService.usersShowAllList = true

      }else{

        this.usersService.usersShowAllList = false

      }
      this.router.navigate(['/admin/management/users/'+this.usersService.adminOpenedForCheckUsersList])
      
    }

  }

  ngOnInit(): void {
    
    const DCFVGYHBUJNIK = this.route.snapshot.paramMap.get('userId')
    this.historyUser(DCFVGYHBUJNIK)
  }

}
