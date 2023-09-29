import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  details:any = ""
  isLoading = true

  userType:any

  requestUpdateInfos = {

    name:"",
    lastName:"",
    pseudoName:"",
    teleAdmin:"",
    prencentage:"",
    id:""

  }

  element:any

  constructor(private usersService:UsersService,private route: ActivatedRoute) { }

  adminDetails(){
    this.usersService.findAdmin(this.usersService.user.id).subscribe((res:any)=>{

      this.details = res


      this.requestUpdateInfos.name = res.name
      this.requestUpdateInfos.lastName = res.lastName
      this.requestUpdateInfos.pseudoName = res.pseudoName
      this.requestUpdateInfos.teleAdmin = res.teleAdmin
      this.requestUpdateInfos.prencentage = res.prencentage
      this.requestUpdateInfos.id = res._id

      var interval = setInterval(()=>{

        if(this.details != "" && this.requestUpdateInfos.prencentage != ""){
          setTimeout(()=>{
            this.isLoading = false
            clearInterval(interval)

            if(this.userType === "admin"){
              setTimeout(()=>{
                this.element = document.querySelector(".profit-select")
              
                for (var i = 0; i < this.element.options.length; i++) {

                  if (this.element.options[i].value === this.requestUpdateInfos.prencentage+"") {
                    
                    this.element.options[i].selected = true;

                    break;
                  }

                }
              },50)
            }

          },150)
        }

      },10)

    })
  }

  updateUserInfos(key:any,value:any){

    if(key==="name"){
      this.requestUpdateInfos["name"] = value.target.value
    }else if(key==="lastName"){
      this.requestUpdateInfos["lastName"] = value.target.value
    }else if(key==="pseudoName"){
      this.requestUpdateInfos["pseudoName"] = value.target.value
    }else if(key==="teleAdmin"){
      this.requestUpdateInfos["teleAdmin"] = value.target.value
    }else if(key==="prencentage"){
      this.requestUpdateInfos["prencentage"] = value.target.value
    }

  }

  update(){

    if(this.requestUpdateInfos.name==="" || this.requestUpdateInfos.lastName==="" || this.requestUpdateInfos.pseudoName===""
      || this.requestUpdateInfos.teleAdmin===""
      )
    {
      alert("All fields are required")
    }else{
      this.usersService.updateAdmin(this.requestUpdateInfos).subscribe((res:any)=>{

        if(res.message){
          alert("saved successfully")
        }

      })  
    }

  }

  ngOnInit(): void {
    this.userType = this.usersService.user.type
    this.adminDetails()
  }

}
