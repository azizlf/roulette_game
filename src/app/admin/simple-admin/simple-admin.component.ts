import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-simple-admin',
  templateUrl: './simple-admin.component.html',
  styleUrls: ['./simple-admin.component.css']
})
export class SimpleAdminComponent implements OnInit {

  constructor(private router: Router,private users:UsersService) { }


  logout(){

    this.users.user.type = ""
    this.router.navigate(["/admin"])

  }

  ngOnInit(): void {
  }

}
