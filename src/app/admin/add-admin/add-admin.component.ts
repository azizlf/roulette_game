import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  userDetails = new FormGroup({

    fname :new FormControl('',[Validators.required ]),
    lname : new FormControl('',[Validators.required ]),
    pseudoName: new FormControl('',[Validators.required ]),
    teleAdmin: new FormControl('',[Validators.required ]),
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
      isSuperAdmin:false,
      teleAdmin:user.teleAdmin,
      role:"admin",
      solde:user.solde,
      prencentage:20,
      Listejoueurs: []
    }


    this.userService.addAdmin(request).subscribe((res:any)=>{

      if(res.message){
        alert("admin created successfully")
      }

    })

  }


  ngOnInit(): void {
  }

}
