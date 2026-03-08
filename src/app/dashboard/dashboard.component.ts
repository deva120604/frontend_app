import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component'; // correct path

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [SidebarComponent] // ← Sidebar include
})
export class DashboardComponent {

  constructor(private router: Router) {}

  // Logout function
  logout() {
    localStorage.removeItem('loggedIn'); // clear login session
    this.router.navigate(['']);           // redirect to login page
  }

  // Sample dashboard data (example)
  stats = {
    totalUsers: 25,
    activeUsers: 18,
    pendingApprovals: 3
  };
}