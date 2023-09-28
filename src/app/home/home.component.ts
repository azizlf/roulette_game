import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service'

declare function dashbordFunctions():void

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openSpin = false

  constructor(private router: Router) { }

  openSpinFn(){
    localStorage.setItem('status', "1")
    this.openSpin = true
    var interval = setInterval(()=>{
      if(localStorage.getItem("status") === "0"){
        this.openSpin = false
      }
    },100)
  }


  ngOnInit(): void {

    dashbordFunctions()

  }

}
