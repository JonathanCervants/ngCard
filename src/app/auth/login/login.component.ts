import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm?: any

  constructor(private service:AuthService){
    
  }
}


/* Especificar el lenguaje al 
DEVICE = ljet4

*/
