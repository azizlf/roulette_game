import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  currentAdmin:any

  constructor(private users:UsersService,private router:Router) { }

  ngOnInit(): void {

    if(this.users.admin === "" || this.users.admin === null){
      this.router.navigate(['/admin/'])
    }

    this.currentAdmin = this.users.admin

  }

}
