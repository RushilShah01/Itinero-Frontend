import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../../services/authService/auth.service';

@Component({
  selector: 'app-auth',
  imports: [NgIf, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  email: string = "";
  name: string = "";
  password: string = "";
  // role:string=""

  http = inject(HttpClient)
  router = inject(Router)
  authsrv=inject(AuthService)

  isLoginMode: boolean = true; // Default mode is login

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogin() {
    const loginData = { email: this.email, password: this.password };
    this.authsrv.login(loginData).subscribe({
     next:(res:any)=>{
      console.log(res);
      this.router.navigateByUrl('/home')
      localStorage.setItem('userName',res.user.name)
      
     },
     error:(err)=>{
      console.log("Api Error: ",err);
     }
    })
  }

  onRegister() {
    const registerData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.authsrv.register(registerData).subscribe({
      next:(res:any)=>{
        localStorage.setItem('userName',res.user.name)
        this.router.navigateByUrl('/home')
      },
      error:(err)=>{
        console.log("Api Error: ",err);
      }
    })
  }

}
