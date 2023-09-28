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

  }

  getAdmins(){

    this.userService.getAllAdmins().subscribe((res:any)=>{

      this.admins = res


    })

  }

  desactiveAdmin(admin:any){

    this.userService.deleteAdmin(admin._id).subscribe((res:any)=>{
      console.log(res)
    })

  }


  ngOnInit(): void {
    this.getAdmins()
  }

}
