import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../../services/authService/auth.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  // authsrv=inject(AuthService)
  // router=inject(Router)
  // onLogout(){
  //   this.authsrv.logout().subscribe({
  //     next:(res)=>{
  //       this.router.navigateByUrl('/auth')
  //     },
  //     error:(err)=>{
  //       console.log("Api Error: ",err);
        
  //     }
  //   })
  // }
}
