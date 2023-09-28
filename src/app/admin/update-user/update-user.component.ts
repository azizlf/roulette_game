import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userParamId:any

  userDetails = new FormGroup({

    fname :new FormControl('',[Validators.required ]),
    lname : new FormControl('',[Validators.required ]),
    pseudoName: new FormControl('',[Validators.required ]),
    teleJoueur: new FormControl('',[Validators.required ]),
    solde: new FormControl('',[Validators.required ]),
    login: new FormControl('',[Validators.required ]),
    password: new FormControl('',[Validators.required ])

  })

  userAttrs:any = []

  constructor(private userService:UsersService,private route: ActivatedRoute) { }

  update(){

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
      id:this.userService.user.id
  
    }

    this.userService.updateUser(request).subscribe((res:any)=>{

      console.log(res)

      if(res.message){
        alert("user created successfully")
      }

    })

  }

  getUserDetails(id:any){

    this.userService.findUser(id).subscribe((res:any)=>{

      this.userAttrs = res

    })

  }


  ngOnInit(): void {
    this.userParamId = this.route.snapshot.paramMap.get('userId');
    this.getUserDetails(this.userParamId)
  }

}
