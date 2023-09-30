import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userParamId:any

  userEntries:any = ""

  isLoading = true

  requestUpdateInfos = {

    name:"",
    lastName:"",
    pseudoName:"",
    teleJoueur:"",
    solde:"",
    id:""

  }

  successMsg = ""
  isLoadingForm = false
  errorMsg = ""
  element:any


  constructor(private userService:UsersService,private router: Router,private route:ActivatedRoute) { }

  returnFromPage(){

    if(this.userService.user.type === "admin"){
      this.userService.usersShowAllList = true
      this.router.navigate(['/admin/management/users/'])
    }else{
      if(this.userService.adminOpenedForCheckUsersList === ""){

        this.userService.usersShowAllList = true

      }else{

        this.userService.usersShowAllList = false

      }
      this.router.navigate(['/admin/management/users/'+this.userService.adminOpenedForCheckUsersList])
      
    }

  }

  updateUserInfos(key:any,value:any){

    if(key==="name"){
      this.requestUpdateInfos["name"] = value.target.value
    }else if(key==="lastName"){
      this.requestUpdateInfos["lastName"] = value.target.value
    }else if(key==="pseudoName"){
      this.requestUpdateInfos["pseudoName"] = value.target.value
    }else if(key==="solde"){
      this.requestUpdateInfos["solde"] = value.target.value
    }else if(key==="teleJoueur"){
      this.requestUpdateInfos["teleJoueur"] = value.target.value
    }

  }

  update(){

    this.isLoadingForm = true


    if(this.requestUpdateInfos.name==="" || this.requestUpdateInfos.lastName==="" || this.requestUpdateInfos.pseudoName===""
      || this.requestUpdateInfos.teleJoueur==="" || this.requestUpdateInfos.solde===""
      ){
      this.element = document.querySelector(".error-msg-box")
      this.isLoadingForm = false
      this.element.style.opacity = "1"
      this.element.style.top = "4%"
      this.errorMsg = "All fields are required"
      setTimeout(()=>{
        this.element.style.opacity = "0"
        this.element.style.top = "0%"
      },3000)
    }else{
      this.userService.updateUser(this.requestUpdateInfos).subscribe((res:any)=>{

        if(res.message){
          this.element = document.querySelector(".success-msg-box")
          this.isLoadingForm = false
          this.element.style.opacity = "1"
          this.element.style.top = "4%"
          this.successMsg = "saved succussfully"
          setTimeout(()=>{
            this.element.style.opacity = "0"
            this.element.style.top = "0%"
          },3000)
        }

      })  
    }

  }

  changeSolde(amount:any,op:any){

    if(op === "+"){
      const result = parseFloat(this.requestUpdateInfos.solde)+parseFloat(amount.value)
      this.requestUpdateInfos.solde = result.toFixed(2)+""
    
    }else if(op === "-"){
      const result = parseFloat(this.requestUpdateInfos.solde)-parseFloat(amount.value)
      if(result>0){
        this.requestUpdateInfos.solde = result.toFixed(2)+""
      }else{
        this.requestUpdateInfos.solde = "0"
      }

    }

  }

  getUserDetails(id:any){

    this.userService.findUser(id).subscribe((res:any)=>{

      this.userEntries = res

      var interval = setInterval(()=>{

        if(this.userEntries != ""){
          setTimeout(()=>{
            this.isLoading = false
            clearInterval(interval)
          },350)
        }

      },10)

      this.requestUpdateInfos.name = res.name
      this.requestUpdateInfos.lastName = res.lastName
      this.requestUpdateInfos.teleJoueur = res.teleJoueur
      this.requestUpdateInfos.solde = res.solde
      this.requestUpdateInfos.pseudoName = res.pseudoName
      this.requestUpdateInfos.id = res._id


    })

  }


  ngOnInit(): void {
    this.userParamId = this.route.snapshot.paramMap.get('userId');
    this.getUserDetails(this.userParamId)
  }

}
