import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-update-template',
  templateUrl: './update-template.component.html',
  styleUrls: ['./update-template.component.css']
})
export class UpdateTemplateComponent implements OnInit {

  tempList:any = []


  constructor(private userService:UsersService) { }


  getItems(){

    this.userService.findAdmin(this.userService.user.id).subscribe((res:any)=>{

      this.tempList.push(res.text1)
      this.tempList.push(res.text2)
      this.tempList.push(res.text3)

    })

  }


  ngOnInit(): void {
    this.getItems()
  }

}
