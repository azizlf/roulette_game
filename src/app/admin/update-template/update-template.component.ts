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

        //temp.value += "img/"
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

      if(res.text1.title === temp.title){
        textSelected = 1
      }
      else if(res.text2.title === temp.title){
        
        textSelected = 2

      }
      else if(res.text3.title === temp.title){
        
        textSelected = 3
      }

      this.infos.forEach((t:any)=>{

        

        if(t.title === temp.title){

          temp.status = !temp.status

          t.status = !t.status

          if(textSelected === 1){
            req = {
              id : this.userService.user.id,
              text1:temp
            }
          }else if(textSelected === 2){
            req = {
              id : this.userService.user.id,
              text2:temp
            }
          }else if(textSelected === 3){
            req = {
              id : this.userService.user.id,
              text3:temp
            }
          }

          console.log(req)

          ///this.userService.updateAdmin(req).subscribe()

          this.userService.updateAdmin({
            id : this.userService.user.id,
            text1:{
              title:t.title,
              value:'img/'+t.value,
              status:false
            }
          }).subscribe() 

          this.userService.updateAdmin({
            id : this.userService.user.id,
            text2:{
              title:t.title,
              value:'img/'+t.value,
              status:false
            }
          }).subscribe()

        }

      })

      

    })

    

  }


  ngOnInit(): void {
    
    this.getItems()
  }

}
