import { DatePipe, NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [DatePipe, NgFor] // Ensures date formatting support
})
export class HomeComponent implements OnInit {
  usersrv = inject(UserService);
  userName: string | null = localStorage.getItem('userName'); // Explicitly define type as string | null

  upcomingTrips: any[] = [];
  previousTrips: any[] = [];

  ngOnInit(): void {
    // Debugging line
    console.log('UserName from localStorage:', this.userName);

    if (this.userName) {
      this.usersrv.fetchUserTrips().subscribe({
        next: (res: any) => {
          console.log('API Response:', res);
          this.upcomingTrips = res.upcomingRequests;
          this.previousTrips = res.completedRequests;
        },
        error: (err) => {
          console.log('API Error:', err);
        },
      });
    } else {
      console.log('User is not signed in.');
    }
  }
}
