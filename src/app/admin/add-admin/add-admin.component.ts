import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  element:any
  isLoadingForm = false
  errorMsg=""
  userDetails:any

  userType:any

  constructor(private userService:UsersService) { }

  create(){

    const user = this.userDetails.value


    if(this.userDetails.status === "VALID"){

      if(this.userType === "start_admin"){
        
        var request = {
          name:user.fname,
          lastName:user.lname,
          pseudoName:user.pseudoName,
          login:user.login,
          password:user.password,
          isSuperAdmin:true,
          teleAdmin:user.teleAdmin,
          role:"superAdmin",
          solde:user.solde,
          prencentage:user.prencentage,
          Listejoueurs: []
        }

        this.isLoadingForm = true

        this.userService.addAdmin(request).subscribe((res:any)=>{

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
          }else if(!res.message){
            this.element = document.querySelector(".error-msg-box")
            setTimeout(()=>{
              this.element.style.opacity = "1"
              this.element.style.top = "4%"
              this.isLoadingForm = false
              this.errorMsg = "Login already exist"
              setTimeout(()=>{
                this.element.style.opacity = "0"
                this.element.style.top = "0%"
              },3000)
            },700)
          }

        })
      
      }
      else{
      
        var request = {
          name:user.fname,
          lastName:user.lname,
          pseudoName:user.pseudoName,
          login:user.login,
          password:user.password,
          isSuperAdmin:false,
          teleAdmin:user.teleAdmin,
          role:"admin",
          solde:user.solde,
          prencentage:user.prencentage,
          Listejoueurs: []
        }

        this.isLoadingForm = true

        this.userService.findAdmin(this.userService.user.id).subscribe((res:any)=>{
          var sld = parseFloat(request.solde+"")
          if(sld < res.solde){
            this.userService.addAdmin(request).subscribe((res:any)=>{

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
              }else if(!res.message){
                this.element = document.querySelector(".error-msg-box")
                setTimeout(()=>{
                  this.element.style.opacity = "1"
                  this.element.style.top = "4%"
                  this.isLoadingForm = false
                  this.errorMsg = "Login already exist"
                  setTimeout(()=>{
                    this.element.style.opacity = "0"
                    this.element.style.top = "0%"
                  },3000)
                },700)
              }

            })
          }else{
            this.element = document.querySelector(".error-msg-box")
            this.errorMsg = "insufficient funds"
            this.element.style.opacity = "1"
            this.element.style.top = "4%"
            this.isLoadingForm = false
            setTimeout(()=>{
              this.element.style.opacity = "0"
              this.element.style.top = "0%"
            },3000)
          }

        })

      }

    }
    else{
      this.element = document.querySelector(".error-msg-box")
      this.errorMsg = "All fields are required"
      this.element.style.opacity = "1"
      this.element.style.top = "4%"
      setTimeout(()=>{
        this.element.style.opacity = "0"
        this.element.style.top = "0%"
      },3000)
    }

    

  }


  ngOnInit(): void {

    this.userType = this.userService.user.type

    if(this.userType === "superAdmin"){
      this.userDetails = new FormGroup({

        fname :new FormControl('',[Validators.required ]),
        lname : new FormControl('',[Validators.required ]),
        pseudoName: new FormControl('',[Validators.required ]),
        teleAdmin: new FormControl('',[Validators.required ]),
        solde: new FormControl('',[Validators.required ]),
        login: new FormControl('',[Validators.required ]),
        password: new FormControl('',[Validators.required ]),
        prencentage: new FormControl('0',[Validators.required ])

      })
    }else if(this.userType === "start_admin"){
      this.userDetails = new FormGroup({

        fname :new FormControl('',[Validators.required ]),
        lname : new FormControl('',[Validators.required ]),
        pseudoName: new FormControl('',[Validators.required ]),
        teleAdmin: new FormControl('',[Validators.required ]),
        solde: new FormControl('',[Validators.required ]),
        login: new FormControl('',[Validators.required ]),
        password: new FormControl('',[Validators.required ])

      })
    }

    this.element = document.querySelector(".profit-select")

    var interval = setInterval(()=>{
      if(this.element != null){
        for (var i = 0; i < this.element.options.length; i++) {

          if (this.element.options[i].value === "0") {
            
            this.element.options[i].selected = true;

            break;
          }

        }
        clearInterval(interval)
      }
    },3)
  }

}
