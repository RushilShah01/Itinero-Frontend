import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../../services/authService/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  cookieService=inject(CookieService)
  role=''
ngOnInit(): void {  
  this.role=this.cookieService.get('role')
}
  http=inject(HttpClient)
  router=inject(Router)
  authsrv=inject(AuthService)

  onLogout(){
    this.authsrv.logout().subscribe({
      next:(res)=>{
        this.router.navigateByUrl('/auth')
      },
      error:(err)=>{
        console.log("Api Error: ",err);
        
      }
    })
  }

}
