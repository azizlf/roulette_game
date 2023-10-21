import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-player-auth',
  templateUrl: './player-auth.component.html',
  styleUrls: ['./player-auth.component.css']
})
export class PlayerAuthComponent implements OnInit {

  userDetails = new FormGroup({

    login :new FormControl('',[Validators.required ]),
    password : new FormControl('',[Validators.required ]),

  })

  constructor(private router: Router,private users:UsersService) { }

 
  login(){

    const user = this.userDetails.value
    
    this.users.loginUser(user).subscribe((res:any)=>{

      if(res.message){
        this.users.user.id = res.joueur
        this.users.user.token = res.token
        if(window.innerWidth <= 950){
          this.router.navigate(['/home-mobile'],{skipLocationChange:true})

        }else{
          this.router.navigate(['/home'])
        }

      }

    })  
  }

  ngOnInit(): void {
  }

}
