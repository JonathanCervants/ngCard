import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 
    http.get('https://fakestoreapi.com/products').subscribe(config=>{
      console.log(config)
      //a need a token with url
    })
  }

  
  private setToken(){
    token = this.tokenKey;
  }
  
  private getToken():string | null{
    return localStorage.getItem(this.tokenKey)
  }

  isAuthenticad():any{
    const token = this.getToken()
    if (!token){
      return false
    }
    const payload = 
    const expect
    return Date
  }

 logout():void{
  localStorage.removeItem(this.tokenKey) 
  }
}
