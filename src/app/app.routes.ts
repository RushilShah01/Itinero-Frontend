import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';
import { BookingManagementComponent } from './pages/booking-management/booking-management.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserTripsComponent } from './pages/user-trips/user-trips.component';
import { BookTripComponent } from './pages/book-trip/book-trip.component';
import { AuthGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to login page initially
  { path: 'auth', component: AuthComponent }, // Public route for authentication

  // Protected Admin Layout with Nested Routes
  {
    path: '',
    component: LayoutComponent, // Sidebar & Router Outlet for Admin
    canActivate: [AuthGuard], // Protect all child routes
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'dashboard', component: AdminDashboardComponent, canActivate:[adminGuard] },
      { path: 'home', component: HomeComponent },
      { path: 'manage-users', component: ManageUserComponent,canActivate:[adminGuard] },
      { path: 'manage-trips', component: BookingManagementComponent, canActivate:[adminGuard] },
      // { path: 'expense-reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'trips', component: UserTripsComponent },
      { path: 'booking', component: BookTripComponent },
    ]
  },

  // Catch-all for unknown routes
  { path: '**', redirectTo: 'home' }
];
