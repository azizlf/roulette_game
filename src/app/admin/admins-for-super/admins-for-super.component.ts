import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admins-for-super',
  templateUrl: './admins-for-super.component.html',
  styleUrls: ['./admins-for-super.component.css']
})
export class AdminsForSuperComponent implements OnInit {

  admins:any = []

  userType:any

  adminId:any

  constructor(private userService:UsersService,private route: ActivatedRoute) { }

  
  getAdmins(){

    this.userService.findAdmin(this.adminId).subscribe((r:any)=>{

      this.admins = r.admins

    })

  }

  ngOnInit(): void {
    this.adminId = this.route.snapshot.paramMap.get('superId')
  }

}
