import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class adminGuard implements CanActivate {
  cookieService = inject(CookieService);
  router = inject(Router)
  constructor() {}

  canActivate(): boolean {
    const role = this.cookieService.get('role'); // ✅ Retrieve token from cookies
    if (role==='Admin') {
      return true; // ✅ Allow access if token exists
    } else {
      this.router.navigate(['/home']); // 🔄 Redirect to login if not authenticated
      return false;
    } 
  }
}