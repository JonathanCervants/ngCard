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
    ngOnInit:void{

    }
  }
 
  onSubmit(){
    // if(this.formLogin.valid){
    //   capturo valores
    //   if(){
    //     llamo a la autenticacion
    //   }
    // }
  }
}


/* Especificar el lenguaje al 
DEVICE = ljet4

*/
