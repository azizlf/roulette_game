import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service'


@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  balance = "10,25"

  history:any = []

  constructor(private usersService:UsersService,private router: Router) { }

  historyUser(){

    this.history = [

      {
        date:"15-02-2023 3:15pm",
        amount:"5,56",
        tiketId:"1248964515564",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"10,56",
        tiketId:"1564815223456",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"3,5",
        tiketId:"8978947845312",
        status:true
      },
      

    ]

  }

  returnFromPage(){

    if(this.usersService.usersShowAllList){
    
      this.router.navigate(['/admin/management/users'])
    
    }else{

      this.router.navigate(['/admin/management/users/'])

    }


  }

  ngOnInit(): void {
    
    this.historyUser()
  }

}
