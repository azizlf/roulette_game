import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  element:any

  constructor(private router: Router) { }

  login(login:any,password:any){

    this.element = document.querySelector(".error-msg")

    if(login.value === "sayros" && password.value === "102030s"){

      localStorage.setItem('loggedin', "1");

      this.router.navigate(['/home']);

    }else{

      this.element.style.opacity = "1"

      setTimeout(()=>{
        
        this.element.style.opacity = "0"

      },5000)

      localStorage.setItem('loggedin', "0");

    }

  }

  ngOnInit(): void {
  }

}
