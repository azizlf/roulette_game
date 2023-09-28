import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

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

    console.log(request)

    this.userService.addUser(request).subscribe((res:any)=>{

      console.log(res)

      if(res.message){
        alert("user created successfully")
      }

    })

  }



  ngOnInit(): void {
  }

}
