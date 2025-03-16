import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service:AuthService){
    
  }

  private setToken(){
    console.log("seter")
  }
  
  private getToken(){
    console.log("seter")
  }

  isAuthenticad():any{

  }

 logout():void{
  console.log("seter")
  }
}
