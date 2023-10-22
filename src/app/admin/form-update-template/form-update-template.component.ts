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
  isLoading = false
  isLoadingForm = false
  requestInfos = {

    value:"",
    title:""

  }

  textSelected = 0
  typeIsImage = false
  imgaeSelected:any

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
      var request = {}
      if(this.textSelected === 1){
        request = {
          id : this.userService.user.id,
          text1:{
            title:this.requestInfos.title,
            value:this.requestInfos.value
          }
        }
      }else if(this.textSelected === 2){
        request = {
          id : this.userService.user.id,
          text2:{
            title:this.requestInfos.title,
            value:this.requestInfos.value
          }
        }
      }else if(this.textSelected === 3){
        request = {
          id : this.userService.user.id,
          text3:{
            title:this.requestInfos.title,
            value:this.requestInfos.value
          }
        }
      }

      this.userService.updateAdmin(request).subscribe((res:any)=>{

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

  selectImage(e:any) {

    const fileInput = e.target


    if (fileInput.files && fileInput.files[0]) {

      const file = fileInput.files[0]

      const fileReader = new FileReader()

      fileReader.onload = (e:any)=>{
        this.imgaeSelected = e.target.result
        this.requestInfos.value = "img/"+this.imgaeSelected
      }

      fileReader.readAsDataURL(file)
    }
  }


  changeFormType(type:any){

    if(type === "image"){
      this.typeIsImage = true
    }else if(type === "text"){
      this.typeIsImage = false
    }

  }

  getBorderColor(type:any){
    var result = ""
    if(type === "image"){
      if(this.typeIsImage){
        result = ".2vw solid #FF9800"
      }else{
        result = ".2vw solid transparent"
      }
    }else if(type === "text"){
      if(!this.typeIsImage){
        result = ".2vw solid #FF9800"
      }else{
        result = ".2vw solid transparent"
      }
    }
    return result

  }

  getTempDetail(title:any){

    this.isLoading = true

    this.userService.findAdmin(this.userService.user.id).subscribe((res:any)=>{

      this.requestInfos.title = title
      
      if(res.text1.title === title){
        this.textSelected = 1
        if(res.text1.value.includes("img/")){
          this.typeIsImage = true
          this.imgaeSelected = res.text1.value.replace("img/","")
        }else{
          this.requestInfos.value = res.text1.value

        }
      }
      else if(res.text2.title === title){
        
        this.textSelected = 2
        if(res.text2.value.includes("img/")){
          this.typeIsImage = true
          this.imgaeSelected = res.text2.value.replace("img/","")
        }else{
          this.requestInfos.value = res.text2.value

        }

      }
      else if(res.text3.title === title){
        
        this.textSelected = 3
        if(res.text3.value.includes("img/")){
          this.typeIsImage = true
          this.imgaeSelected = res.text3.value.replace("img/","")
        }else{
          this.requestInfos.value = res.text3.value

        }
      }
      this.isLoading = false

    })

  }

  ngOnInit(): void {
    this.getTempDetail(this.route.snapshot.paramMap.get('title'))
  }

}
