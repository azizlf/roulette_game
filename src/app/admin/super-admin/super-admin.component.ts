import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {

  constructor(private router: Router,private users:UsersService) { }

  logout(){

    this.users.admin = ""
    this.router.navigate(["/admin"])

  }

  ngOnInit(): void {
  }

}
