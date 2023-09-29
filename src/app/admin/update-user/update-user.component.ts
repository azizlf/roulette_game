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

  constructor(private userService:UsersService,private router: Router,private route:ActivatedRoute) { }

  returnFromPage(){

    if(this.userService.user.type === "admin"){
      this.userService.usersShowAllList = true
      this.router.navigate(['/admin/management/users/'])
    }else{
      this.userService.usersShowAllList = false
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
    }

  }

  update(){

    if(this.requestUpdateInfos.name==="" || this.requestUpdateInfos.lastName==="" || this.requestUpdateInfos.pseudoName===""
      || this.requestUpdateInfos.teleJoueur==="" || this.requestUpdateInfos.solde===""
      ){
      alert("All fields are required")
    }else{
      this.userService.updateUser(this.requestUpdateInfos).subscribe((res:any)=>{

        if(res.message){
          alert("user created successfully")
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
