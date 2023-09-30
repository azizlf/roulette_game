import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service'
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  userDetails = new FormGroup({

    login :new FormControl('',[Validators.required ]),
    password : new FormControl('',[Validators.required ]),

  })

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

  login(){

    const user = this.userDetails.value

    var loginIsSuccess = false
    
    this.isLoadingForm(true)

    this.users.loginAdmin(user).subscribe((res:any)=>{

      if(res.message){
      
        this.users.user.id = res.admin
        this.users.user.type = res.role
            
          setTimeout(()=>{
            
            this.isLoadingForm(false)

            setTimeout(()=>{

              if(res.role === "superAdmin"){

                this.router.navigate(['/admin/management/admins']);

              }else{

                this.router.navigate(['/admin/management/users']);

              }

            
          },650)

        },300)     

      }else{
        this.isLoadingForm(false)
        this.openMessageBox()
      }


    })
  }

  ngOnInit(): void {
    this.users.usersShowAllList = true
  }

}
