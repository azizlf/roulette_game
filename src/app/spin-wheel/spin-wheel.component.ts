import { Component, OnInit } from '@angular/core';
import { RouletteService } from '../services/roulette.service'

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


  choosedAngle = 0

  totalRotations = 0
  rotationsToStop = 67
  isSpinning = true

  wheel:any

  indicator:any

  spinStartTime = 0

  time = 90

  element:any


  constructor(private rouletteService:RouletteService) { }

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

      this.time += .9

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

  ngOnInit(): void {

    setTimeout(()=>{

      SpinWheelEvents()

      this.spinToAngle(34)

    },5000)

  }

}
