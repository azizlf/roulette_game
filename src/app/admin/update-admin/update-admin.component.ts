import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  adminParamId:any

  userDetails = new FormGroup({

    fname :new FormControl('',[Validators.required ]),
    lname : new FormControl('',[Validators.required ]),
    pseudoName: new FormControl('',[Validators.required ]),
    teleAdmin: new FormControl('',[Validators.required ]),
    solde: new FormControl('',[Validators.required ]),
    login: new FormControl('',[Validators.required ]),
    password: new FormControl('',[Validators.required ])

  })

  constructor(private userService:UsersService,private route: ActivatedRoute) { }

  update(){

    const user = this.userDetails.value

    const request = {
  
      name:user.fname,
      lastName:user.lname,
      pseudoName:user.pseudoName,
      login:user.login,
      password:user.password,
      teleAdmin:user.teleAdmin,
      solde:user.solde,
      id:this.adminParamId
  
    }

    this.userService.updateAdmin(request).subscribe((res:any)=>{

      console.log(res)

      if(res.message){
        alert("user created successfully")
      }

    })

  }

  getAdminDetails(id:any){

    this.userService.findAdmin(id).subscribe((res:any)=>{

      console.log(res)

    })

  }

  ngOnInit(): void {
    this.adminParamId = this.route.snapshot.paramMap.get('adminId');
    this.getAdminDetails(this.adminParamId)
  }

}
