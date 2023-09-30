import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  currentAdmin:any
  userType:any
  adminId = ""

  users:any = ""

  adminParamId:any

  isLoading = true

  constructor(private usersService:UsersService,private router: Router,private route: ActivatedRoute) { }

  returnFromPage(){

    this.usersService.usersShowAllList = true
    this.usersService.adminOpenedForCheckUsersList = ""
    this.router.navigate(['/admin/management/admins'])

  }

  openUserHistory(user:any){

    this.router.navigate(['/admin/management/user/history/'+user._id])

  }

  getUsers(listOf:any){

    if(listOf==="admin"){
      this.usersService.findAdmin(this.usersService.user.id).subscribe((res:any)=>{

        this.users = res.Listejoueurs
        this.isLoading = false

        this.adminId = res._id
        

      })
    }else if(listOf==="superAdmin"){
      this.usersService.getAllUsers().subscribe((res:any)=>{

        this.users = res
        this.isLoading = false

      })
    }else{
      this.usersService.findAdmin(listOf).subscribe((res:any)=>{

        this.users = res.Listejoueurs
        this.isLoading = false

        this.adminId = res._id
        

      })
    }

    

  }

  removeUser(user:any,item:any){

    this.usersService.deleteUser(user._id).subscribe((res:any)=>{
      console.log(res)
      item.remove()
    })

  }

  ngOnInit(): void {
    this.currentAdmin = this.usersService.usersShowAllList
    this.userType = this.usersService.user.type
    this.adminParamId = this.route.snapshot.paramMap.get('adminId')
    if(this.adminParamId != null){
      this.getUsers(this.adminParamId)
    }else{
      this.getUsers(this.userType)
    }
  }

}
