import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/adminService/admin.service';
import { DashboardData, Expense } from '../../../../types';



@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  totalExpense: number = 0;
  totalRequests: number = 0;
  totalAcceptedRequests: number = 0;
  totalPendingRequests: number = 0;
  expenses: Expense[] = [];  // Ensure expenses array is initialized

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchDashboardData();
  }

  fetchDashboardData(): void {
    this.adminService.dashboardData().subscribe({
      next: (res: DashboardData) => {
        this.totalExpense = res.totalExpense;
        this.totalRequests = res.totalRequests;
        this.totalAcceptedRequests = res.totalAcceptedRequests;
        this.totalPendingRequests = res.totalPendingRequests;
        this.expenses = res.expenses || []; // Ensure expenses is always an array
      },
      error: (err) => {
        console.error("API Error: ", err);
      }
    });
  }
}
