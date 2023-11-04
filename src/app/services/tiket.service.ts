import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class TiketService {
  
  api = environment.API+"/Roulette"
  
  createdTiketIdForPrint = ""

  currentTiketSelecedToOverview:any = []
  
  constructor(private http:HttpClient) { }

  create(data:any){

    return this.http.post(this.api+"/addTicket/"+data.joueur.id,data)

  }

  getNumSpinWin(id:any){

    return this.http.get(this.api+"/resultats/"+id)

  }

  findTiket(id:any){
    return this.http.get(this.api+"/"+id)
  }

  chrono(){

    return this.http.get(this.api+"/temp/")

  }

}
