import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-simple-admin',
  templateUrl: './simple-admin.component.html',
  styleUrls: ['./simple-admin.component.css']
})
export class SimpleAdminComponent implements OnInit {

  openNavigationList = true
  openDetailList = false

  adminDetail:any

  usersLength = 0
  adminsLength = 0

  userType:any

  constructor(private router: Router,private users:UsersService) { }

  closeSideBarMobile(sideBar:any){

    sideBar.style.right = "-100%"

  }

  openSideBarMobile(sideBar:any){

    sideBar.style.right = "0%"

  }

  getAdmin(){
    this.users.findAdmin(this.users.user.id).subscribe((res:any)=>{

      this.adminDetail = res

      this.users.findAdmin(this.users.user.id).subscribe((r:any)=>{

        this.usersLength = r.Listejoueurs.length

      })

    })
  }

  openList(list:any){
    if(list === "navigation"){
      this.openNavigationList = !this.openNavigationList
    }else if(list === "detail"){
      this.openDetailList = !this.openDetailList
    }
  }

  logout(){

    this.users.user.type = ""
    this.router.navigate(["/admin"])

  }

  ngOnInit(): void {
    this.userType = this.users.user.type
    this.getAdmin()
    setInterval(()=>{
      this.getAdmin()
    },3000)
  }

}
