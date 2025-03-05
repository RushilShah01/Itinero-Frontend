import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  cookieService = inject(CookieService);
  router = inject(Router)
  constructor() {}

  canActivate(): boolean {
    const token = this.cookieService.get('token'); // ✅ Retrieve token from cookies
    console.log("Rushil Noob L : ",token);
    if (token) {
      return true; // ✅ Allow access if token exists
    } else {
      this.router.navigate(['/auth']); // 🔄 Redirect to login if not authenticated
      return false;
    } 
  }
}