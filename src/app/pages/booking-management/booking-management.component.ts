import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../../services/adminService/admin.service';

@Component({
  selector: 'app-booking-management',
  standalone: true,
  imports: [NgFor, DatePipe, NgClass,NgIf],
  templateUrl: './booking-management.component.html',
  styleUrl: './booking-management.component.css'
})
export class BookingManagementComponent implements OnInit {
  requests: any[] = [];
  private adminsrv = inject(AdminService);

  ngOnInit(): void {
    this.adminsrv.bookingManagement().subscribe({
      next: (res:any) => {
        if (res && Array.isArray(res)) {
          this.requests = res;
        } else {
          console.warn('Unexpected response format:', res);
        }
      },
      error: (err) => {
        console.error('Error fetching travel requests:', err);
      }
    });
  }

  changeRequestStatus(requestId: string, status: string): void {
    this.adminsrv.updateRequestStatus(requestId, status).subscribe({
      next: () => {
        console.log(status);
      },
      error: (err) => {
        console.error('Error updating request status:', err);
      }
    });
  }
}
