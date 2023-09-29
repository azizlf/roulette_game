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

  constructor(private userService:UsersService,private router: Router) { }

  openUserForAdmin(admin:any){

    this.userService.usersShowAllList = false
    this.router.navigate(['/admin/management/users/'+admin._id])
    this.userService.adminOpenedForCheckUsersList = admin._id

  }

  getAdmins(){

    this.userService.getAllAdmins().subscribe((res:any)=>{

      res.forEach((item:any)=>{

        if(!item.isSuperAdmin){
          this.admins.push(item)
        }

      })

      console.log(res)


    })

  }

  desactiveAdmin(admin:any,item:any){

    this.userService.deleteAdmin(admin._id).subscribe((res:any)=>{
      item.remove(item)
    })

  }


  ngOnInit(): void {
    this.getAdmins()
  }

}
