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
  adminsOffice:any = []

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
            this.adminsOffice = r.admins

          })
        }else if(this.userService.user.type === "start_admin"){
          
          if(item.role != "start_admin"){
            this.admins.push(item)
            this.adminsOffice.push(item)
          }
          
        }

      })

    })

  }

  search(input:any){

    const text = input.target.value.toLowerCase()

    var selected:any = []

    this.adminsOffice.forEach((item:any)=>{     

      const login = item.login.toLowerCase()
      const phone = item.teleAdmin.toLowerCase()
      const solde = (item.solde + "").toLowerCase()
      const name = item.name.toLowerCase()
      const lastName = item.lastName.toLowerCase()

      if(this.userService.user.type ===  "start_admin"){
        if(lastName.includes(text) || name.includes(text) || solde.includes(text) || phone.includes(text) || login.includes(text) ){
          selected.push(item)
        }
      }else{
        
        const profit = (item.prencentage+"").toLowerCase()+"%"

        if(lastName.includes(text) || name.includes(text) || solde.includes(text) || phone.includes(text) || login.includes(text)
        || profit === text ){
          selected.push(item)
        }
      }

    })

    if(selected.length > 0){
      this.admins = selected
    }else{
      this.admins = this.adminsOffice
    }

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
