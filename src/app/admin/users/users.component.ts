import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  currentAdmin:any

  users:any = []

  constructor(private usersService:UsersService) { }

  getUsers(){

    this.users = [

      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      },
      {
        name:"Foulen",
        date_creation:"15-02-2023 6:20 pm",
        status:"active",
        id:"12345678"
      }

    ]

  }

  ngOnInit(): void {
    this.currentAdmin = this.usersService.admin
    this.getUsers()
  }

}
