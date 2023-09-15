import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  element:any

  constructor(private router: Router,private users:UsersService) { }

  openMessageBox(){

    this.element = document.querySelector(".error-msg")

    this.element.style.opacity = "1"
    this.element.style.top = "5%"

    setTimeout(()=>{
      this.element.style.top = "0%"
      this.element.style.opacity = "0"
    },5000)


  }

  isLoadingForm(status:any){

    if(status){

      this.element = document.querySelector(".login-btn")

      this.element.style.display = "none"

      this.element = document.querySelector(".loading-icon")

      this.element.style.display = "flex"

    }else{

      this.element = document.querySelector(".login-btn")

      this.element.style.display = "block"

      this.element = document.querySelector(".loading-icon")

      this.element.style.display = "none"

    }

  } 

  login(login:any,password:any){

    if(login.value === "admin" && password.value === "admin"){
      
      this.users.admin = "simple"
      
      this.isLoadingForm(true)

        setTimeout(()=>{
          
          this.isLoadingForm(false)

          setTimeout(()=>{

            this.router.navigate(['/admin/management/users']);
          
        },3000)

      },3000)     

    }else if(login.value === "super admin" && password.value === "admin"){

      this.users.admin = "super"
      
      this.isLoadingForm(true)

        setTimeout(()=>{
          
          this.isLoadingForm(false)

          setTimeout(()=>{

            this.router.navigate(['/admin/management/admins']);
          
        },3000)

      },3000)

    }else{
      this.openMessageBox()
    }

  }

  ngOnInit(): void {
  }

}
