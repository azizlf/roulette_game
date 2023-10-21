import { Component, OnInit } from '@angular/core';
import { RouletteService } from '../services/roulette.service'
import { TiketService } from '../services/tiket.service'
import { UsersService } from '../services/users.service'


declare function initFnHome():void

@Component({
  selector: 'app-spin-mobile',
  templateUrl: './spin-mobile.component.html',
  styleUrls: ['./spin-mobile.component.css']
})
export class SpinMobileComponent implements OnInit {

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
  waitSecondes:any

  timeChrono = 120

  currentTime = 0


  constructor(private rouletteService:RouletteService,private users:UsersService,private tiketService:TiketService) { }

  rotateAnim(choosedNum:any){

    this.element = document.querySelector(".spin-app")

    this.element.style.scale = "4.2"
    this.element.style.top = "38%"
    this.element.style.left = "8%"

    this.element = document.querySelector(".spin-section")

    this.element.style.scale = ".5"



    this.spinFinish = false

    this.indicator = document.querySelector(".indicator-number")

    this.element = document.querySelector(".spin")

    this.element.style.transition = "transform 20s ease-in-out"

    var angle = this.angles[this.angles.findIndex(item => item.val === choosedNum)].ang + (360 * 19)

    this.currentAngle = this.angles[this.angles.findIndex(item => item.val === choosedNum)].ang

    this.element.style.transform = "rotate("+(angle + 2)+"deg)"

    this.indicator.innerText = choosedNum

    this.indicator.style.backgroundColor = this.angles[this.angles.findIndex(item => item.val === choosedNum)].color

  }

  initSpin(number:any){

    var choosedNum = number

    var interval = setInterval(()=>{

      var index = Math.floor(Math.random() * this.angles.length)

      choosedNum = this.angles[index].val

      if(choosedNum != number){

        console.log("finded")
        this.spinFinish = true

        this.indicator = document.querySelector(".indicator-number")

        this.element = document.querySelector(".spin")

        this.element.style.transition = "transform 0s"

        var angle = this.angles[this.angles.findIndex(item => item.val === choosedNum)].ang

        this.element.style.transform = "rotate("+(angle + 2)+"deg)"

        this.indicator.innerText = choosedNum

        this.indicator.style.backgroundColor = this.angles[this.angles.findIndex(item => item.val === choosedNum)].color

        clearInterval(interval)
      }

    },15)

  }


  chronoConfig(){

    console.log(this.currentTime)

    this.timerChrono = ((((this.timeChrono-32) - this.currentTime)/(this.timeChrono-32))*100) +"%"
    
    if(this.currentTime >= (this.timeChrono-32) && this.currentTime < this.timeChrono && !this.isSpinning){

      this.isSpinning = true

      this.users.findAdmin(localStorage.getItem("#FSDJIOSFDEZ")).subscribe((res:any)=>{

        this.rotateAnim(res.resultatRoulette)

      })

    }else if(this.currentTime < (this.timeChrono-32)){
      this.isSpinning = false
    }

    if(this.currentTime < this.timeChrono){
      this.currentTime++
    }else{
      this.currentTime = 0
    }

    setTimeout(this.chronoConfig.bind(this),1000)

  }

  ngOnInit(): void {

    this.users.findAdmin(localStorage.getItem("#FSDJIOSFDEZ")).subscribe((res:any)=>{

      console.log(res.historique)
      
      this.initSpin(res.resultatRoulette)
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
            setTimeout(()=>{
              this.element = document.querySelector(".spin-app")
              this.element.style.scale = "1"
              this.element.style.top = "0%"
              this.element.style.left = "0%"
              setTimeout(()=>{
                this.element = document.querySelector(".spin-section")
                this.element.style.scale = "1"
              },100)
              this.element = document.querySelector(".spin")
              this.element.style.transition = "transform 0s"
              this.element.style.transform = "rotate(0deg)"
              this.element.style.transform = "rotate("+(this.currentAngle + 2)+"deg)"
            },2000)
          },4000)

        });

        initFnHome()

        this.tiketService.chrono().subscribe((res:any)=>{

          this.currentTime = res.temp

          this.chronoConfig()

        })

      },2000)
    })

  }


}
