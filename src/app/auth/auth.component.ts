import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  login(login:any,password:any){

    if(login.value === "sayros" && password.value === "102030s"){

      this.router.navigate(['/home']);

    }

  }


  ngOnInit(): void {
  }

}
