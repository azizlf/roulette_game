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
  isLooping = false
  userSolde = 0.0

  tikets:any = []
  conditions:any = []
  soldeTiket = 0
  selectedItems:any = []

  element:any

  doc:any

  coins:any = ["05","1","5","10","20"]

  currentCoinSelected = this.coins[0]

  spinStart:any

  numbers:any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]

  dashbordAttrsCoef:any = [

    {
      list:[12,21],
      coef:18
    },
    {
      list:[13,31],
      coef:18
    },
    {
      list:[23,32],
      coef:18
    },
    {
      list:[11,22,33],
      coef:12
    },
    {
      list:[19,21,23,25,27,29,31,33,35],
      coef:4
    },
    {
      list:[20,22,24,26,28,30,32,34,36],
      coef:4
    },
    {
      list:[1,3,5,7,9,11,13,15,17],
      coef:4
    },
    {
      list:[2,4,6,8,10,12,14,16,18],
      coef:4
    },
    {
      list:[1,2,3,4,5,6,7,8,9,10,11,12],
      coef:3
    },
    {
      list:[13,14,15,16,17,18,19,20,21,22,23,24],
      coef:3
    },
    {
      list:[25,26,27,28,29,30,31,32,33,34,35,36],
      coef:3
    },
    {
      list:[3,6,9,12,15,18,21,24,27,30,33,36],
      coef:3
    },
    {
      list:[2,5,8,11,14,17,20,23,26,29,32,35],
      coef:3
    },
    {
      list:[1,4,7,10,13,16,19,22,25,28,31,34],
      coef:3
    },

    {
      list:[0,10,20,30],
      coef:9
    },
    {
      list:[1,11,21,31],
      coef:9
    },
    {
      list:[2,12,22,32],
      coef:9
    },
    {
      list:[3,13,23,33],
      coef:9
    },
    {
      list:[4,14,24,34],
      coef:9
    },
    {
      list:[5,15,25,35],
      coef:9
    },
    {
      list:[6,16,26,36],
      coef:9
    },
    {
      list:[7,17,27],
      coef:12
    },
    {
      list:[8,18,28],
      coef:12
    },
    {
      list:[9,19,29],
      coef:12
    },
    {
      list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
      coef:2
    },
    {
      list:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36],
      coef:2
    },
    {
      list:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35],
      coef:2
    },
    {
      list:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36],
      coef:2
    },
    {
      list:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35],
      coef:2
    },
    {
      list:[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
      coef:2
    },
    {
      list:[2,4,15,19,21,32],
      coef:6
    },
    {
      list:[6,13,17,25,27,34],
      coef:6
    },
    {
      list:[8,11,10,23,30,36],
      coef:6
    },
    {
      list:[1,5,16,20,24,33],
      coef:6
    },
    {
      list:[9,14,18,22,29,31],
      coef:6
    },
    {
      list:[3,7,12,26,28,35],
      coef:6
    }

  ]

  totalConditionsSolde = 0.0
  currentRestSolde = 0.0

  adminId:any

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
      coefficient.innerHTML = `<p>x36</p>`

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

      if(condition.condition.length > 10){

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

      solde.innerHTML = '<input type="text" value="'+condition.soldeJouer+'" placeholder="solde">'

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

  alertSolde(){

    alert("insufficient funds!")

  }

  multipleSoldeCondition(){

    var solde = 0.0

    if(this.conditions.length > 0){

      this.conditions.forEach((condition:any)=>{

        solde += (condition.soldeJouer * 2)

      })

      if(this.userSolde - solde >= 0){

        this.conditions.forEach((condition:any)=>{

          condition.soldeJouer *= 2

        })

        this.totalConditionsSolde = solde

        this.currentRestSolde = this.userSolde - this.totalConditionsSolde

      }else{
        alert("insufficient funds!")
      }

      this.initConditions()

    }

  }

  generateClickArray(length:any){

    var result = []

    for (var i = 0 ;i < length; i++) {

      var index = Math.floor(Math.random() * this.numbers.length)

      if(!( this.numbers[index] === undefined || this.numbers[index] === null ) ){
        result.push(this.numbers[index])
      }
      

      this.numbers.splice(index,1)

    }
    

    if(result.length > 0){

      var solde = this.currentCoinSelected

      if(solde === "05"){
        solde = 0.5
      }

      result.forEach((res:any)=>{

        var conditionId = this.generateTiketCode(5)

        this.totalConditionsSolde += parseFloat(solde)

        if(this.userSolde-this.totalConditionsSolde <= 0){
          alert("insufficient funds!")
        }else{

          this.currentRestSolde = this.userSolde-this.totalConditionsSolde

          this.selectedItems.push({

            condition_id: conditionId,
            btn:null,
            numbers:[res]

          })
          
          this.conditions.push({
            condition_id: conditionId,
            condition:[res],
            soldeJouer:parseFloat(solde),
            soldeGagner:parseFloat(solde)*36,
            coefficient:36
          })

          this.element = document.querySelector(".n"+res)

          this.element.classList.add("clicked-btn")

          if(this.element.childElementCount === 1){

            this.element.children[0].src = "/assets/img/"+this.currentCoinSelected+".png"
            
          }else if(this.element.childElementCount === 3){

            this.element.children[2].src = "/assets/img/"+this.currentCoinSelected+".png"
            
          }else{
            
            this.element.children[1].src = "/assets/img/"+this.currentCoinSelected+".png"

          }

        }

        
      })

      this.element = document.querySelector(".create-tiket")

      this.element.style.display = "block" 

      this.initConditions()


    }

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

  arraysIsEqual(arr1:any,arr2:any){
    if (arr1.length !== arr2.length) {

      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        
          return false;
      }
    }

    return true;
  }

  addCondition(type:any,ele:any,choice:any){

    var solde = this.currentCoinSelected

    var itemIsSelected = false

    var coef = 0

    if(ele.target.classList.contains("clicked-btn") || ele.target.classList.contains("clicked")){
      itemIsSelected = true
    }

    this.dashbordAttrsCoef.forEach((item:any)=>{

      if(this.arraysIsEqual(choice,item.list)){
        coef = item.coef
      }

    })

    if(coef === 0){

      if(choice.length === 2){
        coef = 18
      }else if(choice.length === 3){
        coef = 12
      }else if(choice.length === 4){
        coef = 9
      }else if(choice.length === 1){
        coef = 36
      }

    }
    if(solde === "05"){
      solde = 0.5
    }
    
    if(!itemIsSelected){

      

      if(this.totalConditionsSolde + parseFloat(solde) >this.userSolde){
        alert("insufficient funds!")
      }else{

        this.currentRestSolde = this.userSolde-this.totalConditionsSolde

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
          soldeGagner:parseFloat(solde)*coef,
          coefficient:coef
        })

        if(ele.target.childElementCount === 1){

          ele.target.children[0].src = "/assets/img/"+this.currentCoinSelected+".png"
          
        }else if(ele.target.childElementCount === 3){

          ele.target.children[2].src = "/assets/img/"+this.currentCoinSelected+".png"
          
        }else{
          
          ele.target.children[1].src = "/assets/img/"+this.currentCoinSelected+".png"

        }

        ele.target.classList.add("clicked-btn")

        this.element = document.querySelector(".create-tiket")

        this.element.style.display = "block" 

        this.totalConditionsSolde += parseFloat(solde)

        this.currentRestSolde = this.userSolde-this.totalConditionsSolde
      }
      
    }
    else{
      this.conditions.forEach((condition:any)=>{
        const list = condition.condition
        
        if(choice.length > 1){
          if(list[list.length-1] === choice[choice.length-1] && list[0] === choice[0]){

            var newSolde = 0

            if(parseFloat(solde)!=condition.soldeJouer){
              newSolde = this.totalConditionsSolde - condition.soldeJouer
              newSolde += parseFloat(solde)
            }

            if(newSolde <= this.userSolde && newSolde != 0){

              this.totalConditionsSolde -= condition.soldeJouer

              this.currentRestSolde += condition.soldeJouer

              this.totalConditionsSolde += parseFloat(solde)

              if(this.currentRestSolde - parseFloat(solde) >= 0){
                this.currentRestSolde -= parseFloat(solde)
              }


              if(ele.target.childElementCount === 1){

                ele.target.children[0].src = "/assets/img/"+this.currentCoinSelected+".png"
                
              }else if(ele.target.childElementCount === 3){

                ele.target.children[2].src = "/assets/img/"+this.currentCoinSelected+".png"
                
              }else{
                
                ele.target.children[1].src = "/assets/img/"+this.currentCoinSelected+".png"

              }
              
              condition.soldeJouer = parseFloat(solde)

            }else{
              alert("insufficient funds!")
            }




          }
        }else{
          if(list[0] === choice[0]){

            var newSolde = 0

            if(parseFloat(solde)!=condition.soldeJouer){
              newSolde = this.totalConditionsSolde - condition.soldeJouer
              newSolde += parseFloat(solde)
            }

            if(newSolde <= this.userSolde && newSolde != 0){

              this.totalConditionsSolde -= condition.soldeJouer

              this.currentRestSolde += condition.soldeJouer

              this.totalConditionsSolde += parseFloat(solde)

              if(this.currentRestSolde - parseFloat(solde) >= 0){
                this.currentRestSolde -= parseFloat(solde)
              }
              

              if(ele.target.childElementCount === 1){

                ele.target.children[0].src = "/assets/img/"+this.currentCoinSelected+".png"
                
              }else if(ele.target.childElementCount === 3){

                ele.target.children[2].src = "/assets/img/"+this.currentCoinSelected+".png"
                
              }else{
                
                ele.target.children[1].src = "/assets/img/"+this.currentCoinSelected+".png"

              }
              
              condition.soldeJouer = parseFloat(solde)

            }else{
              alert("insufficient funds!")
            }
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
        id:this.users.user.id,
        admin:this.adminId
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

          this.numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]

          this.totalConditionsSolde = 0


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
    
    this.numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
      
    this.totalConditionsSolde = 0

  }
  
  removeItem(elet:any,selectedFromTab:any){

    for (var i = 0; i < this.conditions.length; i++) {

      if(this.conditions[i].condition_id === elet.id){

        this.totalConditionsSolde -= this.conditions[i].soldeJouer

        this.currentRestSolde += this.conditions[i].soldeJouer

        this.conditions[i].condition.forEach((con:any)=>{

          this.element = document.querySelector(".n"+con)

          this.element.classList.remove("clicked-btn")

        })
        this.conditions.splice(i,1)
      }
    }

    /*this.selectedItems.forEach((item:any)=>{

      if(item.condition_id === elet.id && item.btn != null){
        item.btn.target.classList.remove("clicked-btn")
        item.btn.target.classList.remove("clicked")

        item.btn.target.onmouseover = ()=>{

          item.btn.target.style.backgroundColor = "#fdfdfd36"

        }

        item.btn.target.onmouseleave = ()=>{
          
          item.btn.target.style.backgroundColor = "transparent"

        }

      }else{
        for (var i = 0; i < item.numbers.length; i++) {

          this.element = document.querySelector(".n"+item.numbers[i])

          this.element.classList.remove("clicked-btn")

          
        }
      }

    })*/

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
      this.adminId = res.admin

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

      setInterval(()=>{
        if(this.rouletteService.spinOpen){
          
          this.spinStart = true

          var interval = setInterval(()=>{
            if(!this.rouletteService.spinOpen){
              this.spinStart = false
              clearInterval(interval)
            }
          })
        }
      },1000)

      this.getUser()

      setTimeout(()=>{

        this.element = document.querySelector(".coin-"+this.currentCoinSelected)

        this.element.style.scale = "1.2"
        
        initFnHome()

      },100)


    }

  }

}
