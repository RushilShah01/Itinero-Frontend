  import { Component, inject, OnInit } from '@angular/core';
  import { UserService } from '../../services/userService/user.service';
import { NgFor } from '@angular/common';
  @Component({
    selector: 'app-manage-user',
    templateUrl: './manage-user.component.html',
    styleUrls: ['./manage-user.component.css'],
    imports:[NgFor]
  })
  export class ManageUserComponent implements OnInit {
    users: any[] = [];
    userService = inject(UserService);

    constructor() {}

    ngOnInit(): void {
      this.loadUsers();
    }

    loadUsers(): void { 
      this.userService.getUsers().subscribe(
        (data: any) => this.users = data,
        (error: any) => console.error('Error fetching users', error)
      );
    }

    toggleRole(user: any): void {
      const newRole = user.role === 'Employee' ? 'Admin' : 'Employee';
    
      // Optimistically update the UI
      const previousRole = user.role;
      user.role = newRole;
    
      this.userService.updateUserRole(user._id, newRole).subscribe(
        (updatedUser: any) => {
          if (updatedUser?.role) {
            user.role = updatedUser.role; // Ensure UI reflects backend change
          }
        },
        (error: any) => {
          console.error('Error updating user role', error);
          user.role = previousRole; // Revert if there's an error
        }
      );
    }
    
  }
