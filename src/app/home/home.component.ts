import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TiketService } from '../services/tiket.service'
import { UsersService } from '../services/users.service'
import { RouletteService } from '../services/roulette.service'

declare function initFnHome():void

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private tiketService:TiketService,private rouletteService:RouletteService,private users:UsersService) { }

  userDetails = {

    name:"",
    solde:0,
    login:""

  }

  userSolde = 0

  tikets:any = []
  conditions:any = []
  soldeTiket = 0
  selectedItems:any = []

  element:any
  doc:any

  coins:any = ["05","1","5","10","20"]

  currentCoinSelected = this.coins[0]

  spinStart:any

  initTikets(){

    this.element = document.querySelector(".list-tikets")

    this.element.innerHTML = ""

    this.tikets.forEach((tiket:any)=>{
      
      var container = document.createElement("div")
      var number = document.createElement("div")
      var hint = document.createElement("div")
      var solde = document.createElement("div")
      var coefficient = document.createElement("div")

      container.setAttribute("class","item-list")
      number.setAttribute("class","item number")
      hint.setAttribute("class","hint")
      solde.setAttribute("class","item")
      coefficient.setAttribute("class","item")


      hint.innerHTML = tiket._id
      solde.innerHTML = `<p>${tiket.solde}</p>`
      coefficient.innerHTML = `<p>x${tiket.coefficient}</p>`

      number.innerHTML = `<p>${tiket._id}</p>`
      number.appendChild(hint)

      number.addEventListener("mouseover",()=>{
        this.showHint(hint)
      })
      number.addEventListener("mouseleave",()=>{
        this.hideHint(hint)
      })

      container.appendChild(number)
      container.appendChild(solde)
      container.appendChild(coefficient)

      

      this.element.appendChild(container)

    })

  }

  initConditions(){

    this.element = document.querySelector(".list-tk")

    this.element.innerHTML = ""

    this.conditions.forEach((condition:any)=>{

      var arrayNumbers = ""

      if(condition.condition.length > 7){

        arrayNumbers = condition.condition[0]+"-"+condition.condition[condition.condition.length-1]

      }else{
        for (var i = 0 ;i < condition.condition.length; i++) {
          if(i>0 && i<condition.condition.length){
            arrayNumbers += " , "
          }
          arrayNumbers += condition.condition[i]
        }
      }

      var container = document.createElement("div")
      var selection = document.createElement("div")
      var solde = document.createElement("div")
      var removeBtn = document.createElement("div")
      var coef = document.createElement("div")

      container.setAttribute("class","it-tk")
      selection.setAttribute("class","item nbrs-select")
      solde.setAttribute("class","item solde")
      coef.setAttribute("class","item coef")
      removeBtn.setAttribute("class","item action")

      container.id = condition.condition_id

      selection.innerHTML = "<p>"+arrayNumbers+"</p>"

      coef.innerText = condition.coefficient

      solde.innerText = condition.soldeJouer

      removeBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

      removeBtn.addEventListener("click",()=>{
        this.removeItem(container,this.selectedItems)
      })


      container.appendChild(selection)
      container.appendChild(coef)
      container.appendChild(solde)
      container.appendChild(removeBtn)

      this.element.appendChild(container)

    })

  }

  hoverSeq(type:any,choice:any){

    for (var i = 0 ;i < choice.length; i++) {

      this.element = document.querySelector(".n"+choice[i])
      this.element.classList.add("active-nbr-choice")
    
    }

  }

  leaveHoverSeq(type:any,choice:any){

    for (var i = 0 ;i < choice.length; i++) {
      this.element = document.querySelector(".n"+choice[i])
      if(!this.element.classList.contains("clicked")){
        this.element.classList.remove("active-nbr-choice")
      }
    
    }

  }

  addCondition(type:any,ele:any,choice:any){

    var solde = this.currentCoinSelected

    console.log(solde)

    var itemIsSelected = false

    if(ele.target.classList.contains("clicked-btn") || ele.target.classList.contains("clicked")){
      itemIsSelected = true
    }

    if(!itemIsSelected){

      ele.target.classList.add("clicked-btn")

      this.element = document.querySelector(".create-tiket")

      this.element.style.display = "block" 

      if(solde === "05"){
        solde = 0.5
      }
      var conditionId = this.generateTiketCode(5)

      this.selectedItems.push({

        condition_id: conditionId,
        btn:ele,
        numbers:choice

      })
      
      this.conditions.push({
        condition_id: conditionId,
        condition:choice,
        soldeJouer:parseFloat(solde),
        soldeGagner:parseFloat(solde)*36,
        coefficient:36
      })

      
    }
    else{
      console.log(ele.target.classList)
      this.conditions.forEach((condition:any)=>{
        const list = condition.condition
        
        if(choice.length > 1){
          if(list[list.length-1] === choice[choice.length-1] && list[0] === choice[0]){
            condition.soldeJouer = parseFloat(solde)
          }
        }else{
          if(list[0] === choice[0]){
            condition.soldeJouer = parseFloat(solde)
          }
        }

      })
    }

    this.initConditions()

  }

  generateTiketCode(length:any) {

    const numbers = 'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPMLKJHGFDQSWXCVBN0123456789'

    var result = ''

    for (var i = 0 ;i < length; i++) {

      const index = Math.floor(Math.random() * numbers.length)

      result += numbers.charAt(index)
    }

      return result

  }

  validateTiket(){

    var solde = 0, soldeMin = 0, soldeMax = 0 , soldeList:any = []

    this.conditions.forEach((condition:any)=>{

      solde += condition.soldeJouer
      soldeList.push(condition.soldeJouer)

    })

    soldeMin = soldeList[0]

    soldeMax = soldeList[0]

    for (var i = 0; i < soldeList.length; i++) {
      
      if(soldeList[i] < soldeMin){
        
        soldeMin = soldeList[i]

      }
      if(soldeList[i] > soldeMax){
        
        soldeMax = soldeList[i]

      }
    }

    var newSolde = this.userDetails.solde - solde

    var request = {
      ticket:{
        condition:this.conditions,
        solde:solde,
        coefficient:36,
        gagnion:false,
        realTime:true,
        soldeMax:soldeMax,
        SoldeMin:soldeMin,
        joueur:this.users.user.id
      },
      joueur:{    
        solde:newSolde,
        id:this.users.user.id
      }
    }


    if(solde > 0){
      
      this.tiketService.create(request).subscribe((res:any)=>{

        if(res.message){

          this.conditions = []

          this.element = document.querySelector(".create-tiket")

          this.element.style.display = "none"

          this.getUser()

          this.userSolde = newSolde

          this.cancelEventFromBtns()

        }

      })
      
    }

    else{

      alert("select condition")

    }

  }

  cancelTiket(){
    
    this.conditions = []

    this.cancelEventFromBtns()
    
    this.element = document.querySelector(".create-tiket")

    this.element.style.display = "none"
  
  }
  
  removeItem(elet:any,selectedFromTab:any){

    for (var i = 0; i < this.conditions.length; i++) {

      if(this.conditions[i].condition_id === elet.id){
        this.conditions.splice(i,1)
      }
    }

    this.selectedItems.forEach((item:any)=>{

      if(item.condition_id === elet.id){
        item.btn.target.classList.remove("clicked-btn")
        item.btn.target.classList.remove("clicked")

        item.btn.target.onmouseover = ()=>{

          item.btn.target.style.backgroundColor = "#fdfdfd36"

        }

        item.btn.target.onmouseleave = ()=>{
          
          item.btn.target.style.backgroundColor = "transparent"

        }

      }

    })

    elet.remove()


  }

  changeCoin(coin:any){

    this.element = document.querySelector(".coin-"+this.currentCoinSelected)

    this.element.style.scale = "1"

    this.currentCoinSelected = coin.target.innerText.replace(".","")

    this.element = document.querySelector(".coin-"+this.currentCoinSelected)

    this.element.style.scale = "1.2"

    /*if(window.innerWidth >= 800){
      this.element = document.querySelector(".cursor-coin")
      this.element.style.backgroundImage=coin.style.backgroundImage
    }*/

  }

  getUser(){

    this.tikets = []

    this.users.findUser(this.users.user.id).subscribe((res:any)=>{
      
      this.userDetails.name = res.name+""+res.lastName
      this.userDetails.login = res.login
      this.userDetails.solde = parseFloat(res.solde)
      this.userSolde = parseFloat(res.solde)

      for (var i = res.tikets.length - 1 ; i >= 0; i--) {
        if(res.tikets[i].realTime){
          this.tikets.push(res.tikets[i])
        }

      }

      this.initTikets()

    })

  }

  logout(){

    this.users.user.id = ""
    this.router.navigate(['/'])

  }

  cancelEventFromBtns(){

    this.element = document.querySelectorAll(".clicked-btn")

    if(this.element != null){
      
      for (var i = 0; i < this.element.length; i++) {

        this.element[i].classList.remove("clicked-btn")

      }
      
    }

    this.element = document.querySelector(".clicked")

    if(this.element != null){
      
      for (var i = 0; i < this.element.length; i++) {

        this.element[i].classList.remove("clicked")

      }

    }


  }

  showHint(hint:any){
    hint.style.opacity = "1"
  }

  hideHint(hint:any){
    hint.style.opacity = "0"
  }


  ngOnInit(): void {

    if(this.users.user.id === ""){

      this.router.navigate(['/'])

    }else{

      this.spinStart = this.rouletteService.spinOpen

      setTimeout(()=>{
        
        this.spinStart = true

        this.rouletteService.spinOpen = true

        var interval = setInterval(()=>{
          if(!this.rouletteService.spinOpen){
            //this.spinStart = false
            clearInterval(interval)
          }
        })

      },1500000000000)

      this.getUser()

      setTimeout(()=>{

        this.element = document.querySelector(".coin-"+this.currentCoinSelected)

        this.element.style.scale = "1.2"

      },100)

      initFnHome()

    }

  }

}
