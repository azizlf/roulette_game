import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.css']
})
export class PlayerSettingsComponent implements OnInit {

  isLoadingForm = false
  isLoading = true

  requestUpdateInfos = {
    login:"--",
    name:"--",
    lastName:"--",
    pseudoName:"--",
    teleJoueur:"--",
    id:""
  }

  errorMsg:any
  successMsg:any
  element:any

  constructor(private usersService:UsersService,private router: Router) { }

  updateUserInfos(key:any,value:any){

    if(key==="name"){
      this.requestUpdateInfos["name"] = value.target.value
    }else if(key==="lastName"){
      this.requestUpdateInfos["lastName"] = value.target.value
    }else if(key==="pseudoName"){
      this.requestUpdateInfos["pseudoName"] = value.target.value
    }else if(key==="teleJoueur"){
      this.requestUpdateInfos["teleJoueur"] = value.target.value
    }

  }

  update(){

    this.isLoadingForm = true


    if(this.requestUpdateInfos.name==="" || this.requestUpdateInfos.lastName==="" || this.requestUpdateInfos.pseudoName===""
      || this.requestUpdateInfos.teleJoueur===""
      ){
      this.element = document.querySelector(".error-msg-box")
      this.isLoadingForm = false
      this.element.style.opacity = "1"
      this.element.style.top = "10%"
      this.errorMsg = "All fields are required"
      setTimeout(()=>{
        this.element.style.opacity = "0"
        this.element.style.top = "0%"
      },3000)
    }else{
      this.usersService.updateUser(this.requestUpdateInfos).subscribe((res:any)=>{

        if(res.message){
          this.element = document.querySelector(".success-msg-box")
          this.isLoadingForm = false
          this.element.style.opacity = "1"
          this.element.style.top = "10%"
          this.successMsg = "saved succussfully"
          setTimeout(()=>{
            this.element.style.opacity = "0"
            this.element.style.top = "0%"
          },3000)
        }

      })  
    }

  }

  getUser(){
    this.usersService.findUser(this.usersService.user.id).subscribe((res:any)=>{

      this.requestUpdateInfos.lastName = res.lastName
      this.requestUpdateInfos.name = res.name
      this.requestUpdateInfos.login = res.login
      this.requestUpdateInfos.pseudoName = res.pseudoName
      this.requestUpdateInfos.teleJoueur = res.teleJoueur
      this.requestUpdateInfos.id = res._id

      this.isLoading = false

    })
  }

  ngOnInit(): void {
    if(this.usersService.user.id === ""){

      this.router.navigate(['/'])

    }else{
      
      this.getUser()

    }
  }

}
