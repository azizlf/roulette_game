import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersShowAllList = true

  adminApi = environment.API+"/admin"

  userApi = environment.API+"/joueur"

  adminAuth = environment.API+"/loginAdmin"

  userAuth = environment.API+"/loginJoueur"

  adminOpenedForCheckUsersList = ""

  user = {

    type:"",
    id:"",
    token:""

  }

  constructor(private http:HttpClient) { }

  // **********************************************************
  // **********************************************************
  // ********************   Admin   ***************************
  // **********************************************************
  // **********************************************************

  loginAdmin(data:any){
    return this.http.post(this.adminAuth+"/",data)
  }

  getAllAdmins(){
    return this.http.get(this.adminApi+"/")
  }

  findAdmin(id:any){
    return this.http.get(this.adminApi+"/"+id)
  }

  addAdmin(data:any){

    return this.http.post(this.adminApi+"/addadmin",data)

  }

  updateAdmin(data:any){

    return this.http.put(this.adminApi+"/"+data.id,data)

  }

  deleteAdmin(id:any){

    return this.http.delete(this.adminApi+"/"+id)

  }

  // **********************************************************
  // **********************************************************
  // ********************   client   **************************
  // **********************************************************
  // **********************************************************

  getAllUsers(){
    return this.http.get(this.userApi+"/")
  }

  findUser(id:any){
    return this.http.get(this.userApi+"/"+id)
  }


  addUser(data:any){
    return this.http.post(this.userApi+"/addjoueur",data)
  }

  updateUser(data:any){

    return this.http.put(this.userApi+"/"+data.id,data)

  }

  deleteUser(id:any){

    return this.http.delete(this.userApi+"/"+id)

  }

  loginUser(data:any){
    return this.http.post(this.userAuth+"/",data)
  }


}