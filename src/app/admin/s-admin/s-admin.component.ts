import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service'


@Component({
  selector: 'app-s-admin',
  templateUrl: './s-admin.component.html',
  styleUrls: ['./s-admin.component.css']
})
export class SAdminComponent implements OnInit {


  constructor(private router: Router,private users:UsersService) { }

  openNavigationList = true
  openDetailList = false

  adminDetail:any

  usersLength = 0
  adminsLength = 0

  userType:any

  returnFromPage(){

    this.users.usersShowAllList = true
    this.router.navigate(['/admin/management/users'])

  }

  getAdmin(){
    this.users.findAdmin(this.users.user.id).subscribe((res:any)=>{

      this.adminDetail = res

      this.users.getAllAdmins().subscribe((r:any)=>{
        var admins:any = []

        r.forEach((item:any)=>{
          if(item.isSuperAdmin){
            admins.push(item)
          }
        })

        this.adminsLength = admins.length
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
