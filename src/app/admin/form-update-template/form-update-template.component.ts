import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-update-template',
  templateUrl: './form-update-template.component.html',
  styleUrls: ['./form-update-template.component.css']
})
export class FormUpdateTemplateComponent implements OnInit {

  entries:any = ""
  isLoading = true
  isLoadingForm = false
  requestInfos = {

    value:"",
    title:"",
    id:""

  }

  element:any
  errorMsg:any
  successMsg:any


  constructor(private userService:UsersService,private route:ActivatedRoute) {}

  updateInfos(key:any,value:any){

    if(key==="title"){
      this.requestInfos["title"] = value.target.value
    }else if(key==="value"){
      this.requestInfos["value"] = value.target.value
    }

  }

  update(){

    this.isLoadingForm = true


    if(this.requestInfos.title==="" || this.requestInfos.value===""){
      this.element = document.querySelector(".error-msg-box")
      this.isLoadingForm = false
      this.element.style.opacity = "1"
      this.element.style.top = "4%"
      this.errorMsg = "All fields are required"
      setTimeout(()=>{
        this.element.style.opacity = "0"
        this.element.style.top = "0%"
      },3000)
    }else{
      this.userService.updateAdmin(this.requestInfos).subscribe((res:any)=>{

        if(res.message){
          this.element = document.querySelector(".success-msg-box")
          this.isLoadingForm = false
          this.element.style.opacity = "1"
          this.element.style.top = "4%"
          this.successMsg = "saved succussfully"
          setTimeout(()=>{
            this.element.style.opacity = "0"
            this.element.style.top = "0%"
          },3000)
        }

      })  
    }

  }



  getTempDetail(title:any){

    this.userService.findAdmin(this.userService.user.id).subscribe((res:any)=>{

      this.requestInfos.title = title
      this.requestInfos.id = res._id
      
      if(res.text1.title === title){
        this.requestInfos.value = res.text1.value
      }
      else if(res.text2.title === title){
        this.requestInfos.value = res.text2.value
      }
      else if(res.text3.title === title){
        this.requestInfos.value = res.text3.value
      }

    })

  }

  ngOnInit(): void {
    this.getTempDetail(this.route.snapshot.paramMap.get('title'))
  }

}
