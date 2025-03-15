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
    })
  }
}
