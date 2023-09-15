import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  balance = "10,25"

  history:any = []

  constructor() { }

  historyUser(){

    this.history = [

      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:true
      },
      {
        date:"15-02-2023 3:15pm",
        amount:"15,56",
        status:false
      }

    ]

  }

  ngOnInit(): void {
    this.historyUser()
  }

}
