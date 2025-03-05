import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Booking, DashboardData } from '../../../../types';

// Define interfaces for expected API responses



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // Get dashboard statistics
  dashboardData(): Observable<DashboardData> {
    return this.http.get<DashboardData>(`${this.baseUrl}/api/dashboard`, { withCredentials: true });
  }

  // Get booking management details
  bookingManagement(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/api/booking-management`, { withCredentials: true });
  }

  // Update the status of a travel request
  updateRequestStatus(requestId: string, status: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.baseUrl}/api/booking-management`,
      { requestId, status },
      { withCredentials: true }
    );
  }
}
