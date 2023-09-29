import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  adminParamId:any
  adminEntries:any = ""
  isLoading = true
  isLoadingForm = false
  requestUpdateInfos = {

    name:"",
    lastName:"",
    pseudoName:"",
    teleAdmin:"",
    solde:"",
    id:""

  }
  element:any
  formHasConnectionProblem = false
  formIsValidate = false

  constructor(private userService:UsersService,private route: ActivatedRoute) { }
  
  updateUserInfos(key:any,value:any){

    if(key==="name"){
      this.requestUpdateInfos["name"] = value.target.value
    }else if(key==="lastName"){
      this.requestUpdateInfos["lastName"] = value.target.value
    }else if(key==="pseudoName"){
      this.requestUpdateInfos["pseudoName"] = value.target.value
    }else if(key==="solde"){
      this.requestUpdateInfos["solde"] = value.target.value
    }else if(key==="teleAdmin"){
      this.requestUpdateInfos["teleAdmin"] = value.target.value
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

  update(){

    this.isLoadingForm = true

    this.userService.updateAdmin(this.requestUpdateInfos).subscribe((res:any)=>{
      

      if(res.message){
        this.element = document.querySelector(".success-msg-box")
        setTimeout(()=>{
          this.element.style.opacity = "1"
          this.element.style.top = "4%"
          this.isLoadingForm = false
          setTimeout(()=>{
            this.element.style.opacity = "0"
            this.element.style.top = "0%"
          },3000)
        },700)
      }else{
        this.element = document.querySelector(".error-msg-box")
        setTimeout(()=>{
          this.element.style.opacity = "1"
          this.element.style.top = "4%"
          this.isLoadingForm = false
          setTimeout(()=>{
            this.element.style.opacity = "0"
            this.element.style.top = "0%"
          },3000)
        },700)
      }

    })

  }

  getAdminDetails(id:any){

    this.userService.findAdmin(id).subscribe((res:any)=>{

      this.adminEntries = res

      var interval = setInterval(()=>{

        if(this.adminEntries != ""){
          setTimeout(()=>{
            this.isLoading = false
            clearInterval(interval)
          },350)
        }

      },10)

      this.requestUpdateInfos.name = res.name
      this.requestUpdateInfos.lastName = res.lastName
      this.requestUpdateInfos.teleAdmin = res.teleAdmin
      this.requestUpdateInfos.solde = res.solde
      this.requestUpdateInfos.pseudoName = res.pseudoName
      this.requestUpdateInfos.id = res._id

    })

  }

  ngOnInit(): void {
    this.adminParamId = this.route.snapshot.paramMap.get('adminId');
    this.getAdminDetails(this.adminParamId)
  }

}
