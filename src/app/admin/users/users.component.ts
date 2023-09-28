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

  users:any = []

  adminParamId:any

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

  getUsers(isSimpleAdmin:any){

    if(!isSimpleAdmin){
      this.usersService.findAdmin(this.usersService.user.id).subscribe((res:any)=>{

        this.users = res.Listejoueurs

        this.adminId = res._id

      })
    }else{
      this.usersService.getAllUsers().subscribe((res:any)=>{

        this.users = res

      })
    }

    

  }

  removeUser(user:any){

    this.usersService.deleteUser(user._id).subscribe((res:any)=>{
      console.log(res)
    })

  }

  ngOnInit(): void {
    this.currentAdmin = this.usersService.usersShowAllList
    this.userType = this.usersService.user.type
    this.adminParamId = this.route.snapshot.paramMap.get('adminId');
    this.getUsers(this.currentAdmin)
  }

}
