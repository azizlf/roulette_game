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

  openNavigationList = true
  openDetailList = false

  adminDetail:any

  usersLength = 0
  adminsLength = 0

  userType:any

  userSolde:any

  returnFromPage(){

    this.users.usersShowAllList = true
    this.router.navigate(['/admin/management/users'])

  }

  getAdmin(){
    this.users.findAdmin(this.users.user.id).subscribe((res:any)=>{

      this.adminDetail = res

      var admins = res.admins
            
      this.adminsLength = admins.length

      if(this.userType === "superAdmin"){
        
        this.users.getAllUsers().subscribe((r:any)=>{
          this.usersLength = r.length
        })
      }

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
