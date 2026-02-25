import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class SettingsComponent {

  // get email from token storage
  email = localStorage.getItem('user_email');

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_email');

    // redirect to login
    window.location.href = '/login';
  }
}