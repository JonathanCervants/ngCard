import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm?: any
  formGroup = new FormGroup({
    username : new FormControl('', Validators.required),
    password :new FormControl('', Validators.required)
  });

  constructor(private service:AuthService){
    ngOnInit:void{
    }
  }
 
  onSubmit(){
    console.warn(this.formGroup.value)
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
