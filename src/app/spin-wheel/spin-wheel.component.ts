import { Component, OnInit } from '@angular/core';
import { RouletteService } from '../services/roulette.service'
import { TiketService } from '../services/tiket.service'
import { UsersService } from '../services/users.service'

declare function SpinWheelEvents():void

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.css']
})
export class SpinWheelComponent implements OnInit {

  angles = [

    {
      ang:0,
      val:0,
      color:"#2cc93b"
    },
    {
      ang:10,
      val:26,
      color:"#2c2728"
    },
    {
      ang:19,
      val:3,
      color:"#cf1b24"
    },
    {
      ang:29,
      val:35,
      color:"#2c2728"
    },
    {
      ang:39,
      val:12,
      color:"#cf1b24"
    },
    {
      ang:49,
      val:28,
      color:"#2c2728"
    },
    {
      ang:58,
      val:7,
      color:"#cf1b24"
    },
    {
      ang:68,
      val:29,
      color:"#2c2728"
    },
    {
      ang:77,
      val:18,
      color:"#cf1b24"
    },
    {
      ang:88,
      val:22,
      color:"#2c2728"
    },
    {
      ang:97,
      val:9,
      color:"#cf1b24"
    },
    {
      ang:106,
      val:31,
      color:"#2c2728"
    },
    {
      ang:117,
      val:14,
      color:"#cf1b24"
    },
    {
      ang:126,
      val:20,
      color:"#2c2728"
    },
    {
      ang:136,
      val:1,
      color:"#cf1b24"
    },
    {
      ang:146,
      val:33,
      color:"#2c2728"
    },
    {
      ang:155,
      val:16,
      color:"#cf1b24"
    },
    {
      ang:164,
      val:24,
      color:"#2c2728"
    },
    {
      ang:175,
      val:5,
      color:"#cf1b24"
    },
    {
      ang:185,
      val:10,
      color:"#2c2728"
    },
    {
      ang:195,
      val:23,
      color:"#cf1b24"
    },
    {
      ang:205,
      val:8,
      color:"#2c2728"
    },
    {
      ang:213,
      val:30,
      color:"#cf1b24"
    },
    {
      ang:224,
      val:11,
      color:"#2c2728"
    },
    {
      ang:233,
      val:36,
      color:"#cf1b24"
    },
    {
      ang:244,
      val:13,
      color:"#2c2728"
    },
    {
      ang:253,
      val:27,
      color:"#cf1b24"
    },
    {
      ang:262,
      val:6,
      color:"#2c2728"
    },
    {
      ang:271,
      val:34,
      color:"#cf1b24"
    },
    {
      ang:281,
      val:17,
      color:"#2c2728"
    },
    {
      ang:290,
      val:25,
      color:"#cf1b24"
    },
    {
      ang:300,
      val:2,
      color:"#2c2728"
    },
    {
      ang:311,
      val:21,
      color:"#cf1b24"
    },
    {
      ang:321,
      val:4,
      color:"#2c2728"
    },
    {
      ang:330,
      val:19,
      color:"#cf1b24"
    },
    {
      ang:340,
      val:15,
      color:"#2c2728"
    },
    {
      ang:349,
      val:32,
      color:"#cf1b24"
    }

  ] 

  timerChrono = "100%"


  choosedAngle = 0

  totalRotations = 0
  rotationsToStop = 67
  isSpinning = false

  wheel:any

  indicator:any

  spinStartTime = 0

  time = 90

  element:any

  spinFinish = false

  currentAngle = 0

  timeChrono = 120

  currentTime = 0

  currentToken:any

  user_login = ""

  lastTikets:any = []

  numbersTable:any = []

  numbers:any = [1,13,25,2,14,26,3,15,27,4,16,28,5,17,29,6,18,30,7,19,31,8,20,32,9,21,33,10,22,34,11,23,35,12,24,36]

  zeroOccur = 0

  redOccur = 0
  blackOccur = 0
  greenOccur = 0

  onto12Occur = 0
  thrtto24Occur = 0
  twntfto136ccur = 0

  doensOccur = 0

  hotNumbers:any = []
  coldNumbers:any = []

  constructor(private rouletteService:RouletteService,private users:UsersService,private tiketService:TiketService) { }

  rotateAnim(choosedNum:any){

    this.spinFinish = false

    this.indicator = document.querySelector(".indicator-number")

    this.element = document.querySelector(".spin")

    this.element.style.transition = "transform 20s ease-in-out"

    var angle = this.angles[this.angles.findIndex(item => item.val === choosedNum)].ang + (360 * 20)

    this.currentAngle = this.angles[this.angles.findIndex(item => item.val === choosedNum)].ang

    this.element.style.transform = "rotate("+(angle + 2)+"deg)"

    this.indicator.innerText = choosedNum

    this.indicator.style.backgroundColor = this.angles[this.angles.findIndex(item => item.val === choosedNum)].color

  }

  initSpin(choosedNum:any){

    this.spinFinish = true

    this.indicator = document.querySelector(".indicator-number")

    this.element = document.querySelector(".spin")

    this.element.style.transition = "transform 0s"

    var angle = this.angles[this.angles.findIndex(item => item.val === choosedNum)].ang

    this.element.style.transform = "rotate("+(angle + 2)+"deg)"

    this.indicator.innerText = choosedNum

    this.indicator.style.backgroundColor = this.angles[this.angles.findIndex(item => item.val === choosedNum)].color

  }


  chronoConfig(){

    this.tiketService.chrono().subscribe((res:any)=>{

      this.currentTime = res.temp

      this.timerChrono = ((((this.timeChrono-32) - this.currentTime)/(this.timeChrono-32))*100) +"%"
    
      if(this.currentTime >= (this.timeChrono-32) && this.currentTime < this.timeChrono && !this.isSpinning){

        this.isSpinning = true

        this.users.findAdmin(localStorage.getItem("#FSDJIOSFDEZ")).subscribe((res:any)=>{

          this.rotateAnim(res.resultatRoulette)

        })

      }else if(this.currentTime < (this.timeChrono-32)){
        this.isSpinning = false
      }

    })

    if(localStorage.getItem("#TKPOLMGFM") != this.currentToken){
      window.close()
    }

    setTimeout(this.chronoConfig.bind(this),1000)

  }

  generateCode(length:any) {

    const numbers = 'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPMLKJHGFDQSWXCVBN0123456789'

    var result = ''

    for (var i = 0 ;i < length; i++) {

      const index = Math.floor(Math.random() * numbers.length)

      result += numbers.charAt(index)
    }

      return result

  }

  checkNumberColor(n:any){
    
    if(n === 0){
      return "green"
    }
    else if(n%2 === 0){
      return "black"
    }
    else{
      return "red"
    }

  }

  manageHotCold(){

    this.hotNumbers = []
    this.coldNumbers = []

    this.numbersTable.forEach((nbr:any)=>{

      nbr.forEach((n:any)=>{

        if(n.occur >= 2){
          if(this.hotNumbers.length < 5){
            this.hotNumbers.push({

              number:n.number,
              color:n.color,

            })
          }
        }else{
          if(this.coldNumbers.length < 5){
            this.coldNumbers.push({

              number:n.number,
              color:n.color,

            })
          }
        }

      })

    })


  }


  manageColor(n:any){

    if(n === 0){
      this.greenOccur++
    }
    else if(n%2 === 0){
      this.blackOccur++
    }
    else{
      this.redOccur++
    }

  }

  manageDozens(n:any){

    if(n >= 1 && n <= 12){
      this.onto12Occur++
      this.doensOccur++
    }
    else if(n >= 13 && n <= 24){
      this.thrtto24Occur++
      this.doensOccur++
    }
    else if(n >= 25 && n <= 36){
      this.twntfto136ccur++
      this.doensOccur++
    }

  }


  historyMng(history:any){

    this.zeroOccur = 0

    this.redOccur = 0
    this.blackOccur = 0
    this.greenOccur = 0

    this.onto12Occur = 0
    this.thrtto24Occur = 0
    this.twntfto136ccur = 0

    this.doensOccur = 0


    const list = history.slice(0,40)

    this.lastTikets = []

    for (var i = 0 ;i < 8; i++) {

      this.lastTikets.push({

        number:list[i],
        color:this.checkNumberColor(list[i]),
        code:"#"+this.generateCode(10)

      })

    }

    this.generateSection()


    list.forEach((n:any)=>{

      this.manageDozens(n)

      this.manageColor(n)

      if(n === 0){

        this.zeroOccur += 1

      }

      this.numbersTable.forEach((nbr:any)=>{
        
        nbr.forEach((nb:any)=>{


          if(nb.number === n){
            nb.occur += 1
          }

        })
        

      })

    })

    this.manageHotCold()


    this.element = document.querySelector(".lignes-container")

    this.element.innerHTML = ""

    this.numbersTable.forEach((sc:any)=>{

      var html = `<div class="ligne-nbrs">

                    <div class="key ${sc[0].color}">${sc[0].number}</div>
                    <div class="value">${sc[0].occur}</div>

                    <div class="key ${sc[1].color}">${sc[1].number}</div>
                    <div class="value">${sc[1].occur}</div>

                    <div class="key ${sc[2].color}">${sc[2].number}</div>
                    <div class="value">${sc[2].occur}</div>

                  </div>`

      
      this.element.innerHTML += html

    })

    var html = `<div class="ligne-nbrs end">
                  <div class="key green">0</div>
                  <div class="value">${this.zeroOccur}</div>
                </div>`
    this.element.innerHTML += html
  }


  generateSection(){
    this.numbersTable = []
    var counter = 1
    var section:any = []

    for (var i = 0 ;i < this.numbers.length; i++) {

      section.push({

        number:this.numbers[i],
        occur:0,
        color:this.checkNumberColor(this.numbers[i])

      })

      if(counter < 3){
        
        counter++

      }else{
        this.numbersTable.push(section)
        section = []
        counter = 1
      }

    }
  }


  ngOnInit(): void {


    this.user_login = localStorage.getItem("#LOAEREUHDFS")+""

    this.currentToken = localStorage.getItem("#TKPOLMGFM")

    this.users.findAdmin(localStorage.getItem("#FSDJIOSFDEZ")).subscribe((res:any)=>{

      this.generateSection()
      this.historyMng(res.hist)

      setTimeout(()=>{

        this.element = document.querySelector(".spin")

        this.element.addEventListener("transitionend", ()=>{
            
          this.indicator = document.querySelector(".indicator-number")

          this.spinFinish = true

          this.indicator.style.transform = "scale(2)"

          this.indicator.style.margin = "0"

          setTimeout(()=>{
            this.indicator.style.transform = "scale(1)"
            this.indicator.style.marginTop = "3.3%"
            this.element.style.transition = "transform 0s"
            this.element.style.transform = "rotate(0deg)"
            this.element.style.transform = "rotate("+(this.currentAngle + 2)+"deg)"
            this.users.findAdmin(localStorage.getItem("#FSDJIOSFDEZ")).subscribe((res:any)=>{

              this.historyMng(res.hist)

            })
          },4000)

        });

        SpinWheelEvents()

        this.tiketService.chrono().subscribe((r:any)=>{

          this.currentTime = r.temp

          if(r.temp < 90 ){
            this.initSpin(res.hist[0])
          }else{
            this.initSpin(res.hist[1])
          }

          this.chronoConfig()

        })

      },2000)
    })

  }

}
























































/*

  spinToAngle(desiredAngle:any) {
    const index = this.angles.findIndex(item => item.val === desiredAngle)

    if (index !== -1) {
        this.choosedAngle = index
        this.totalRotations = 0
        this.isSpinning = true 
        this.spinStartTime = performance.now()
        this.requestAnimationFrame(this.animateSpin)
    } else {
        console.error("Desired angle not found in the angles array.")
    }
  }

  animateSpin(timestamp:any) {

    this.wheel = document.querySelector(".spin")

    this.indicator = document.querySelector(".indicator-number")

    if(this.isSpinning) {
        
      const elapsedTime = timestamp - this.spinStartTime;
 
      const progress = (elapsedTime % this.time) / this.time;

      let angle = progress * 360

      this.wheel.style.transform = "rotate(" + (angle-4) + "deg"
        
      const index = (Math.floor((this.angles.length * angle) / 360) + this.angles.length) % this.angles.length;

      this.indicator.innerText = this.angles[index].val

      this.indicator.style.backgroundColor = this.angles[index].color

      this.time += .8

      if (index !== this.choosedAngle) {
        this.requestAnimationFrame(this.animateSpin)
      } 
      else {

        this.totalRotations++

        if (this.totalRotations < this.rotationsToStop) {
          this.requestAnimationFrame(this.animateSpin)
        } 
        else if(this.totalRotations === this.rotationsToStop){
    
          setTimeout(()=>{
            this.indicator.style.transform = "scale(2)"
              this.indicator.style.margin = "0"
              setTimeout(()=>{
                this.indicator.style.transform = "scale(1)"
                this.indicator.style.marginTop = "3.3%"
                setTimeout(()=>{
                  
                  this.rouletteService.spinOpen = false
                  this.rouletteService.angleStoped = this.wheel.style.transform
                  this.rouletteService.selectedNumberWin = this.angles[this.choosedAngle].val
                  this.rouletteService.selectedColorNumberWin = this.angles[this.choosedAngle].color
                },5000)
              },4000)
          },550) 

          this.isSpinning = false

        }
      }
    }
  }

  requestAnimationFrame(callback: any) {
    window.requestAnimationFrame(callback.bind(this));
  }

  */