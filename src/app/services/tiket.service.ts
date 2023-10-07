import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class TiketService {
  
  api = environment.API+"/Roulette"
  
  constructor(private http:HttpClient) { }

  create(data:any){

    return this.http.post(this.api+"/addTicket/"+data.joueur.id,data)

  }

}
