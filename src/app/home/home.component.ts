import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TiketService } from '../services/tiket.service'
import { UsersService } from '../services/users.service'
import { RouletteService } from '../services/roulette.service'
import * as QRCode from 'qrcode-generator'
import * as JsBarcode from 'jsbarcode'



declare function initFnHome():void
declare function scanQrTiket():void
declare function stopCamera():void
declare function scanBarCode():void

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

  openSpinMobile = false

  noEventUser = false

  timeIsUpSpin = false

  openMsgBox = false

  isLooping = false

  userSolde = 0.0

  openTimerAlert = false 

  timerAlert:any

  tikets:any = []
  conditions:any = []
  soldeTiket = 0
  selectedItems:any = []

  element:any

  soldeMaxWin = 0

  doc:any

  coins:any = ["05","1","5","10","20"]

  currentCoinSelected = this.coins[0]

  appBarcodeData:any
  appBarcodeFormat:any


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

  openWaitAlert = false

  totalConditionsSolde = 0.0
  currentRestSolde = 0.0

  adminId:any

  openScanQrCode = false

  scanInterval:any

  tiketNumberScanned = ""

  openResultScan = false

  scanTiket = {
    id:"",
    solde:0,
    status:false,
    realTime:true
  }

  closeResultScan(){
    this.openResultScan = false
  }

  scanQrImage(){

    if(!this.openScanQrCode){
      scanQrTiket()

      setTimeout(()=>{

        if(localStorage.getItem("access-to-camera") === "1"){

          this.element = document.querySelector(".read-qr-sanc")
          this.element.style.opacity = "1"
          this.element.style.pointerEvents = "all"
          this.openScanQrCode = true

        }else{

          alert("access denied to camera")

        }

        setTimeout(()=>{

          this.scanInterval =  setInterval(()=>{

            scanQrTiket()

            var result = localStorage.getItem("qr-data")

            if(result != "false"){
              
              this.tiketService.findTiket(result).subscribe((res:any)=>{

                this.scanTiket.id = result+""
                this.scanTiket.solde = res.solde
                this.scanTiket.status = res.gagnion
                this.scanTiket.realTime = res.realTime

                this.openResultScan = true

              })

            }

          },10000)

        },1000)

      },3000)
    }
    else{
      stopCamera()
      clearInterval(this.scanInterval)
      this.element = document.querySelector(".read-qr-sanc")
      this.element.style.opacity = "0"
      this.element.style.pointerEvents = "none"
      this.openScanQrCode = false
    }

  }

  scanBarCode(){

    if(!this.openScanQrCode){

      this.element = document.querySelector(".read-qr-sanc")
      this.element.style.opacity = "1"
      this.element.style.pointerEvents = "all"
      this.openScanQrCode = true

      this.scanInterval =  setInterval(()=>{

        scanBarCode()

        var result = localStorage.getItem("POHUHADFJIOK")

        if(result != "" && result != null && result != undefined){
          
          this.tiketService.findTiket(result).subscribe((res:any)=>{

            this.scanTiket.id = result+""
            this.scanTiket.solde = res.solde
            this.scanTiket.status = res.gagnion
            this.scanTiket.realTime = res.realTime

            this.openResultScan = true

          })

        }

      },2000)

    }else{
      stopCamera()
      clearInterval(this.scanInterval)
      this.element = document.querySelector(".read-qr-sanc")
      this.element.style.opacity = "0"
      this.element.style.pointerEvents = "none"
      this.openScanQrCode = false
    }

  }

  openSpinwheel(){

    const url = window.location.href.split("/")[2]

    const token = this.generateTiketCode(12)

    window.open("http://"+url+"/spin/desktop")
    
    localStorage.setItem("#TKPOLMGFM",token)

    localStorage.setItem("#FSDJIOSFDEZ",this.adminId)

  }

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

  initConditions(btnEvent:any){

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
        this.removeItem(container,this.selectedItems,btnEvent)
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

    if(!this.timeIsUpSpin){
      var solde = 0.0

      if(this.conditions.length > 0){

        this.conditions.forEach((condition:any)=>{

          solde += (condition.soldeJouer * 2)

        })

        if(this.userSolde - solde >= 0){

          this.conditions.forEach((condition:any)=>{

            condition.soldeJouer *= 2
            condition.soldeGagner = condition.soldeJouer * condition.coefficient

          })

          this.totalConditionsSolde = solde

          this.currentRestSolde = this.userSolde - this.totalConditionsSolde

        }else{
          alert("insufficient funds!")
        }

        this.initConditions(null)

      }

    }
    

  }

  generateClickArray(length:any){

    if(!this.timeIsUpSpin){
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

        this.initConditions(null)

      }
    
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

    if(!this.timeIsUpSpin){
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

          var soldeList:any = []

          this.conditions.forEach((condition:any)=>{

            soldeList.push(condition.soldeGagner)

          })

          this.soldeMaxWin = soldeList[0]

          for (var i = 0; i < soldeList.length; i++) {
            
            if(soldeList[i] > this.soldeMaxWin){
              
              this.soldeMaxWin = soldeList[i]

            }
          }
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

              if(newSolde != 0){
                if(newSolde <= this.userSolde){

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

                }
                else{
                  alert("insufficient funds!")
                }
              }

              




            }
          }else{
            if(list[0] === choice[0]){

              var newSolde = 0

              if(parseFloat(solde)!=condition.soldeJouer){
                newSolde = this.totalConditionsSolde - condition.soldeJouer
                newSolde += parseFloat(solde)
              }

              if(newSolde != 0){
                if(newSolde <= this.userSolde){

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

                }
                else{
                  alert("insufficient funds!")
                }
              }


            }
          }

        })
      }    

      this.initConditions(ele)
    }

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

          this.tiketService.createdTiketIdForPrint = res.ticket

          this.element = document.querySelector(".create-tiket")

          this.element.style.display = "none"

          this.getUser()

          this.userSolde = newSolde

          this.openPrint()

        }

      })
      
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
  
  removeItem(elet:any,selectedFromTab:any,btnEvent:any){

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
    
    if(btnEvent != null){
      btnEvent.target.classList.remove("clicked-btn")
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

      localStorage.setItem("#LOAEREUHDFS",res.login)

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

  chronoConfig(){

    this.tiketService.chrono().subscribe((res:any)=>{

      if(res.temp >= 40){

        this.noEventUser = true
        this.timeIsUpSpin = true

      }else{

        this.noEventUser = false
        this.timeIsUpSpin = false
        this.getUser()

      }

    })

    setTimeout(this.chronoConfig.bind(this),1000)

  }

  initTiketToPrint(){

    this.element = document.querySelector(".tiket-area-print-content")

    this.element.innerHTML = `<div class="title">N° ${this.tiketService.createdTiketIdForPrint}</div>
    <div class="titles-list">
      <div class="item">Selection</div>
      <div class="item center">Odd</div>
      <div class="item right">Solde</div>
    </div>
    <div class="conditions-list"></div>`

    var solde = 0, soldeMin = 0, soldeMax = 0 , soldeList:any = []

    this.conditions.forEach((condition:any)=>{

      solde += condition.soldeJouer
      soldeList.push(condition.soldeGagner)

    })

    soldeMax = soldeList[0]

    for (var i = 0; i < soldeList.length; i++) {

      if(soldeList[i] > soldeMax){
        
        soldeMax = soldeList[i]

      }
    }

    this.element = document.querySelector(".conditions-list")

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

      var conditionItemHtml =  `<div class="item">
                                <div class="it">${arrayNumbers}</div>
                                <div class="it center">x${condition.coefficient}</div>
                                <div class="it right">${condition.soldeJouer} dt</div>
                              </div>`
      
      this.element.innerHTML += conditionItemHtml

    })


    var totalHtml = `<div class="total-tiket">
                      <div class="item">
                        <p class="ttl">Total</p>
                        <p class="right">${solde} dt</p>
                      </div>
                      <div class="item">
                        <p class="ttl">Max win</p>
                        <p class="right">${soldeMax} dt</p>
                      </div>
                    </div>`

    this.element = document.querySelector(".tiket-area-print-content")

    this.element.innerHTML += totalHtml

    this.element.innerHTML += "<svg class='bar-code-svg'></svg>"

    var src = this.generateBarCode(this.tiketService.createdTiketIdForPrint)

    //var qrCode = `<img class="qr-image-tiket-print" src="${src}" alt"qrCode/>`


    //this.element.innerHTML += qrCode

    


  }

  printTiket(){

    this.initTiketToPrint()

    setTimeout(()=>{

      this.cancelTiket()

      this.element = document.querySelector(".tiket-print-area");

      this.openMsgBox = false

      this.doc = window.open('', '', 'width="100%",height="100%"');
      
      this.doc.document.open();
      
      this.doc.document.write(`
        
        <html>

          <head>

            <title>Print Ticket</title>

          <style>

            .tiket-print-area{

              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              background-color: white;
              z-index: 956456445698689897489751;

            }

            .tiket-print-area .content-container{

              width: 90%;
              text-align: center;

            }

            .tiket-print-area .content-container img{

              margin-top: 3%;

            }


            .tiket-print-area .content-container .title{

              width: 100%;
              text-align: center;
              padding: 13% 0;
              font-size: 40px;

            }

            .tiket-print-area .content-container img{

              width: 17%;

            }

            .tiket-print-area .content-container .titles-list{

              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;

            }

            .tiket-print-area .content-container .titles-list .item{

              width: 34%;
              font-size: 17px;
              font-weight: bold;
              display: flex;
              align-items: center;

            }

            .tiket-print-area .content-container .titles-list .item.center{

              justify-content: center;

            }

            .tiket-print-area .content-container .titles-list .item.right{

              justify-content: right;

            }


            .tiket-print-area .content-container .conditions-list{

              width: 100%;
              border-bottom: .1vw dashed gray;
              padding: 1% 0;

            }

            .tiket-print-area .content-container .conditions-list .item{

              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: .5% 0;
              width: 100%;
              font-size: 16px;

            }


            .tiket-print-area .content-container .conditions-list .item .it{

              width: 34%;
              display: flex;
              align-items: center;

            }


            .tiket-print-area .content-container .conditions-list .item .it.center{

              justify-content: center;


            }

            .tiket-print-area .content-container .conditions-list .item .it.right{

              justify-content: right;


            }

            .tiket-print-area .content-container .total-tiket{

              width: 100%;

            }

            .tiket-print-area .content-container .total-tiket .item{

              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: .1% 0;
              font-size: 16px;

            }

            .tiket-print-area .content-container .total-tiket .item p{

              width: 34%;
              display: flex;
              align-items: center;
            }

            .tiket-print-area .content-container .total-tiket .item p.center{

              justify-content: center;


            }


            .tiket-print-area .content-container .total-tiket .item p.right{

              justify-content: right;


            }

            .tiket-print-area .content-container .total-tiket .item .ttl{

              font-weight: bold;

            }

            .tiket-print-area svg{
              scale: .7;
              margin-top: 3%;
              opacity: .9;
            }


          </style>

          </head>
        <body>`);
      this.doc.document.write(this.element.outerHTML);
      this.doc.document.write('</body></html>');
      this.doc.document.close();
      this.doc.print();
      this.doc.close();
    },1000)

  }

  openPrint(){
    if(!this.timeIsUpSpin){
      this.openMsgBox = true
    }
  }

  cancelPrint(){

    this.openMsgBox = false

    this.cancelTiket()
  }

  generateQRCode(data:any) {

    const qr = QRCode(0, 'L')

    qr.addData(data)

    qr.make()

    return qr.createDataURL(4, 0)
  }

  generateBarCode(data:any){

    this.appBarcodeData = data
    this.appBarcodeFormat = 'CODE128'

    this.element = document.querySelector(".bar-code-svg")

    JsBarcode(this.element, this.appBarcodeData, {format: this.appBarcodeFormat});

  }


  ngOnInit(): void {

    if(this.users.user.id === ""){

      this.router.navigate(['/'])

    }else{

      this.tiketService.chrono().subscribe((res:any)=>{
        
        var waitSc = 120 - res.temp

        if(waitSc <= 30){

          this.openWaitAlert = true
          this.timeIsUpSpin = true

          setTimeout(()=>{

            this.openWaitAlert = false
            this.chronoConfig()

          },(waitSc * 1000))

        }else{

          this.chronoConfig()
        }

      })
      
      this.getUser()

      setTimeout(()=>{

        this.element = document.querySelector(".coin-"+this.currentCoinSelected)

        this.element.style.scale = "1.2"
        
        initFnHome()

        setInterval(()=>{
          this.element = document.querySelector(".read-qr-sanc")
          
          if(!this.openScanQrCode){
            this.element.style.opacity = "0"
            this.element.style.pointerEvents = "none"
          }

        },3000)

      },100)

     


    }

  }

}
