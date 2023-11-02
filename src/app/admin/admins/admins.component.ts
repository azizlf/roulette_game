import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  admins:any = []

  userType:any

  constructor(private userService:UsersService,private router: Router) { }

  openUserForAdmin(admin:any){

    this.userService.usersShowAllList = false
    this.router.navigate(['/admin/management/users/'+admin._id])
    this.userService.adminOpenedForCheckUsersList = admin._id

  }

  getAdmins(){

    this.userService.getAllAdmins().subscribe((res:any)=>{

      res.forEach((item:any)=>{

        if(this.userService.user.type === "superAdmin"){
          this.userService.findAdmin(this.userService.user.id).subscribe((r:any)=>{

            this.admins = r.admins

          })
        }else if(this.userService.user.type === "start_admin"){
          
            this.admins.push(item)
          
        }

      })

    })

  }

  desactiveAdmin(admin:any,item:any){

    this.userService.deleteAdmin(admin._id).subscribe((res:any)=>{
      item.remove(item)
    })

  }


  ngOnInit(): void {
    this.userType = this.userService.user.type
    this.getAdmins()
  }

}
