import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBookTravelForm } from '../../../../types';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }

  constructor(private http: HttpClient) { }

  bookTrip(tripData:IBookTravelForm){
    return this.http.post(`${environment.baseUrl}/api/travel-request`,tripData,{withCredentials:true})
  }

  fetchTravelHistory(){
    return this.http.get(`${environment.baseUrl}/api/travel-request`,{withCredentials:true})
  }

  fetchUserTrips(){
    return this.http.get(`${environment.baseUrl}/api/dashboard/user-trips`,{withCredentials:true})
  }
  getUsers(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/users`);
  }

  // Update user role
  updateUserRole(userId: number, newRole: string): Observable<any> {
    return this.http.put(`${environment.baseUrl}/api/users/update-role`, { userId, newRole });
  }
}
