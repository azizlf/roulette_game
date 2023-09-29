import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  isLoadingForm = false
  errorMsg=""
  element:any
  userDetails = new FormGroup({

    fname :new FormControl('',[Validators.required ]),
    lname : new FormControl('',[Validators.required ]),
    pseudoName: new FormControl('',[Validators.required ]),
    teleJoueur: new FormControl('',[Validators.required ]),
    solde: new FormControl('',[Validators.required ]),
    login: new FormControl('',[Validators.required ]),
    password: new FormControl('',[Validators.required ])

  })

  constructor(private userService:UsersService) { }


  create(){

    const user = this.userDetails.value

    if(this.userDetails.status === "VALID"){

      const request = {
    
        name:user.fname,
        lastName:user.lname,
        pseudoName:user.pseudoName,
        login:user.login,
        password:user.password,
        teleJoueur:user.teleJoueur,
        tiket:[],
        tiketRealTime:[],
        solde:user.solde,
        admin:this.userService.user.id
    
      }

      this.isLoadingForm = true


      this.userService.addUser(request).subscribe((res:any)=>{


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
            this.errorMsg = "Something wrong!"
            setTimeout(()=>{
              this.element.style.opacity = "0"
              this.element.style.top = "0%"
            },3000)
          },700)
        }

      })
      
    }else{
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
  }

}
