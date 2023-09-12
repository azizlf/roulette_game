import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function rouletteEventsMain():void

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    rouletteEventsMain()

    var loggedin = localStorage.getItem('loggedin')

    if(loggedin === "0"){

      this.router.navigate(["/"])

    }

  }

}
