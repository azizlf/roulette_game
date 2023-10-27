import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-update-template',
  templateUrl: './update-template.component.html',
  styleUrls: ['./update-template.component.css']
})
export class UpdateTemplateComponent implements OnInit {

  tempList:any = []
  infos:any = []

  constructor(private userService:UsersService) { }


  getItems(){

    this.userService.findAdmin(this.userService.user.id).subscribe((res:any)=>{

      this.tempList.push(res.text1)
      this.tempList.push(res.text2)
      this.tempList.push(res.text3)

      this.infos.push(res.text1)
      this.infos.push(res.text2)
      this.infos.push(res.text3)

      this.tempList.forEach((temp:any)=>{

        if(temp.value.includes("img/")){
          temp.type = "image"
          temp.value = temp.value.replace("img/","")

        }else{
          temp.type = "text"
        }

      })

    })

  }

  update(temp:any){

    var req = {}

    var textSelected = 0

    this.userService.findAdmin(this.userService.user.id).subscribe((res:any)=>{


      var req = {}

      if(res.text1.title === temp.title){
        if(temp.status){
          temp.status = false
          res.text1.status = false
        }else{
          temp.status = true
          res.text1.status = true
        }
        req = {
          id : this.userService.user.id,
          text1:res.text1
        }
      }
      else if(res.text2.title === temp.title){
        if(temp.status){
          temp.status = false
          res.text2.status = false
        }else{
          temp.status = true
          res.text2.status = true
        }
        req = {
          id : this.userService.user.id,
          text2:res.text2
        }

      }
      else if(res.text3.title === temp.title){
        if(temp.status){
          temp.status = false
          res.text3.status = false
        }else{
          temp.status = true
          res.text3.status = true
        }
        req = {
          id : this.userService.user.id,
          text3:res.text3
        }
      }
      console.log(req)

      this.userService.updateAdmin(req).subscribe()

      

    })

    

  }


  ngOnInit(): void {
    
    this.getItems()
  }

}
