import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TiketService } from '../services/tiket.service';
@Component({
  selector: 'app-player-tiket',
  templateUrl: './player-tiket.component.html',
  styleUrls: ['./player-tiket.component.css']
})
export class PlayerTiketComponent implements OnInit {

  isLoading = false
  conditions:any = []
  dashbordAttrsCoef:any = [
    {
      list:[12,21],
      coef:18,
      title:"<span>Mirror</span> 12 | 21"
    },
    {
      list:[13,31],
      coef:18,
      title:"<span>Mirror</span> 13 | 31"
    },
    {
      list:[23,32],
      coef:18,
      title:"<span>Mirror</span> 23 | 32"
    },
    {
      list:[11,22,33],
      coef:12,
      title:"<span>Twins</span>"
    },
    {
      list:[19,21,23,25,27,30,32,34,36],
      coef:4,
      title:"<span>High & Red</span>"
    },
    {
      list:[20,22,24,26,28,29,31,33,35],
      coef:4,
      title:"<span>High & Black</span>"
    },
    {
      list:[1,3,5,7,9,12,14,16,18],
      coef:4,
      title:"<span>Low & Red</span>"
    },
    {
      list:[2,4,6,8,10,11,13,15,17],
      coef:4,
      title:"<span>Low & Black</span>"
    },
    {
      list:[1,2,3,4,5,6,7,8,9,10,11,12],
      coef:3,
      title:"<span>Dozen 1-12</span>"
    },
    {
      list:[13,14,15,16,17,18,19,20,21,22,23,24],
      coef:3,
      title:"<span>Dozen 13-24</span>"
    },
    {
      list:[25,26,27,28,29,30,31,32,33,34,35,36],
      coef:3,
      title:"<span>Dozen 25-36</span>"
    },
    {
      list:[3,6,9,12,15,18,21,24,27,30,33,36],
      coef:3,
      title:"<span>|||</span>"
    },
    {
      list:[2,5,8,11,14,17,20,23,26,29,32,35],
      coef:3,
      title:"<span>||</span>"
    },
    {
      list:[1,4,7,10,13,16,19,22,25,28,31,34],
      coef:3,
      title:"<span>|</span>"
    },

    {
      list:[0,10,20,30],
      coef:9,
      title:"<span>Finals 0</span>"
    },
    {
      list:[1,11,21,31],
      coef:9,
      title:"<span>Finals 1</span>"
    },
    {
      list:[2,12,22,32],
      coef:9,
      title:"<span>Finals 2</span>"
    },
    {
      list:[3,13,23,33],
      coef:9,
      title:"<span>Finals 3</span>"
    },
    {
      list:[4,14,24,34],
      coef:9,
      title:"<span>Finals 4</span>"
    },
    {
      list:[5,15,25,35],
      coef:9,
      title:"<span>Finals 5</span>"
    },
    {
      list:[6,16,26,36],
      coef:9,
      title:"<span>Finals 6</span>"
    },
    {
      list:[7,17,27],
      coef:12,
      title:"<span>Finals 7</span>"
    },
    {
      list:[8,18,28],
      coef:12,
      title:"<span>Finals 8</span>"
    },
    {
      list:[9,19,29],
      coef:12,
      title:"<span>Finals 9</span>"
    },
    {
      list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
      coef:2,
      title:"<span>Low 1-18</span>"
    },
    {
      list:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36],
      coef:2,
      title:"<span>Low 1-18</span>"
    },
    {
      list:[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36],
      coef:2,
      title:"<span>Red</span>"
    },
    {
      list:[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,35,35],
      coef:2,
      title:"<span>Black</span>"
    },
    {
      list:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35],
      coef:2,
      title:"<span>ODD</span>"
    },
    {
      list:[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
      coef:2,
      title:"<span>Hight 19-36</span>"
    },
    {
      list:[2,4,15,19,21,32],
      coef:6,
      title:"<span>Sector A</span>"
    },
    {
      list:[6,13,17,25,27,34],
      coef:6,
      title:"<span>Sector B</span>"
    },
    {
      list:[8,11,10,23,30,36],
      coef:6,
      title:"<span>Sector C</span>"
    },
    {
      list:[1,5,16,20,24,33],
      coef:6,
      title:"<span>Sector D</span>"
    },
    {
      list:[9,14,18,22,29,31],
      coef:6,
      title:"<span>Sector E</span>"
    },
    {
      list:[3,7,12,26,28,35],
      coef:6,
      title:"<span>Sector F</span>"
    }

  ]
  angles = [

    {
      ang: 0,
      val: 0,
      color: "#2cc93b"
    },
    {
      ang: 10,
      val: 26,
      color: "#2c2728"
    },
    {
      ang: 19,
      val: 3,
      color: "#cf1b24"
    },
    {
      ang: 29,
      val: 35,
      color: "#2c2728"
    },
    {
      ang: 39,
      val: 12,
      color: "#cf1b24"
    },
    {
      ang: 49,
      val: 28,
      color: "#2c2728"
    },
    {
      ang: 58,
      val: 7,
      color: "#cf1b24"
    },
    {
      ang: 68,
      val: 29,
      color: "#2c2728"
    },
    {
      ang: 77,
      val: 18,
      color: "#cf1b24"
    },
    {
      ang: 88,
      val: 22,
      color: "#2c2728"
    },
    {
      ang: 97,
      val: 9,
      color: "#cf1b24"
    },
    {
      ang: 106,
      val: 31,
      color: "#2c2728"
    },
    {
      ang: 117,
      val: 14,
      color: "#cf1b24"
    },
    {
      ang: 126,
      val: 20,
      color: "#2c2728"
    },
    {
      ang: 136,
      val: 1,
      color: "#cf1b24"
    },
    {
      ang: 146,
      val: 33,
      color: "#2c2728"
    },
    {
      ang: 155,
      val: 16,
      color: "#cf1b24"
    },
    {
      ang: 164,
      val: 24,
      color: "#2c2728"
    },
    {
      ang: 175,
      val: 5,
      color: "#cf1b24"
    },
    {
      ang: 185,
      val: 10,
      color: "#2c2728"
    },
    {
      ang: 195,
      val: 23,
      color: "#cf1b24"
    },
    {
      ang: 205,
      val: 8,
      color: "#2c2728"
    },
    {
      ang: 213,
      val: 30,
      color: "#cf1b24"
    },
    {
      ang: 224,
      val: 11,
      color: "#2c2728"
    },
    {
      ang: 233,
      val: 36,
      color: "#cf1b24"
    },
    {
      ang: 244,
      val: 13,
      color: "#2c2728"
    },
    {
      ang: 253,
      val: 27,
      color: "#cf1b24"
    },
    {
      ang: 262,
      val: 6,
      color: "#2c2728"
    },
    {
      ang: 271,
      val: 34,
      color: "#cf1b24"
    },
    {
      ang: 281,
      val: 17,
      color: "#2c2728"
    },
    {
      ang: 290,
      val: 25,
      color: "#cf1b24"
    },
    {
      ang: 300,
      val: 2,
      color: "#2c2728"
    },
    {
      ang: 311,
      val: 21,
      color: "#cf1b24"
    },
    {
      ang: 321,
      val: 4,
      color: "#2c2728"
    },
    {
      ang: 330,
      val: 19,
      color: "#cf1b24"
    },
    {
      ang: 340,
      val: 15,
      color: "#2c2728"
    },
    {
      ang: 349,
      val: 32,
      color: "#cf1b24"
    }

  ]
  constructor(private router:Router,private route:ActivatedRoute,private tiketService:TiketService) { }

  returnFromPage(){

    if(window.innerWidth <= 950){
      this.router.navigate(['/home-mobile/history'],{skipLocationChange:true})
    }else{
      this.router.navigate(['/home/history'])
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

  checkTiketConditions(item:any){

    console.log(item)
    if(item.condition.length === 1){
      item.condition = item.condition[0]
    }else{
      this.dashbordAttrsCoef.forEach((it:any)=>{
        if(this.arraysIsEqual(item.condition,it.list)){
          item.condition = it.title
          console.log(item.condition)
        }
      })
      
    }

  }

  getTiket(id:any){

    this.isLoading = true

    const list = this.tiketService.currentTiketSelecedToOverview

    const tiket = list.find((item:any) => {return item._id === id})

    this.conditions = tiket.condition

    this.conditions.forEach((item:any)=>{
      this.checkTiketConditions(item)
    })

    this.isLoading = false

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.getTiket(id)
  }

}
