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
    this.router.navigate(['/admin/management/admins'])

  }

  openUserHistory(user:any){

    if(this.usersService.usersShowAllList){
      this.router.navigate(['/admin/management/user/history/'+user._id])
    }else{
      this.router.navigate(['/admin/management/user/history/'+this.adminParamId+"/"+user._id])
    }

  }

  getUsers(listOf:any){

    if(listOf==="admin"){
      this.usersService.findAdmin(this.usersService.user.id).subscribe((res:any)=>{

        this.users = res.Listejoueurs

        if(this.users.length === 0){
          this.users = "."
        }

        this.adminId = res._id
        var interval = setInterval(()=>{

          if(this.users != ""){
            setTimeout(()=>{
              this.isLoading = false
              clearInterval(interval)
            },350)
          }

        },10)

      })
    }else if(listOf==="superAdmin"){
      this.usersService.getAllUsers().subscribe((res:any)=>{

        this.users = res
        if(this.users.length === 0){
          this.users = "."
        }

        var interval = setInterval(()=>{

          if(this.users != ""){
            setTimeout(()=>{
              this.isLoading = false
              clearInterval(interval)
            },350)
          }

        },10)

      })
    }else{
      this.usersService.findAdmin(listOf).subscribe((res:any)=>{

        this.users = res.Listejoueurs
        if(this.users.length === 0){
          this.users = "."
        }

        this.adminId = res._id
        var interval = setInterval(()=>{

          if(this.users != ""){
            setTimeout(()=>{
              this.isLoading = false
              clearInterval(interval)
            },350)
          }

        },10)

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
    this.adminParamId = this.route.snapshot.paramMap.get('adminId');
    if(this.adminParamId != null){
      this.getUsers(this.adminParamId)
    }else{
      this.getUsers(this.userType)
    }
  }

}
