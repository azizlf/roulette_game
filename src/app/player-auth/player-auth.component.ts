import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-player-auth',
  templateUrl: './player-auth.component.html',
  styleUrls: ['./player-auth.component.css']
})
export class PlayerAuthComponent implements OnInit {

  userDetails = new FormGroup({

    login :new FormControl('',[Validators.required ]),
    password : new FormControl('',[Validators.required ]),

  })

  errorMsg:any

  element:any
  isLoading = true
  isLoadingForm = false

  constructor(private router: Router,private users:UsersService) { }

 
  login(){

    this.isLoadingForm = true

    const user = this.userDetails.value
    
    this.users.loginUser(user).subscribe((res:any)=>{

      if(res.message){
        this.users.user.id = res.joueur
        this.users.user.token = res.token
        this.isLoadingForm = true
        if(window.innerWidth <= 950){
          this.router.navigate(['/home-mobile'],{skipLocationChange:true})

        }else{
          this.router.navigate(['/home'])
        }

      }else{
        this.element = document.querySelector(".error-msg-box")
        this.isLoadingForm = false
        this.element.style.opacity = "1"
        this.element.style.top = "4%"
        this.errorMsg = "Login or password incorrect"
        setTimeout(()=>{
          this.element.style.opacity = "0"
          this.element.style.top = "0%"
        },3000)
      }

    })  
  }

  ngOnInit(): void {
  }

}
