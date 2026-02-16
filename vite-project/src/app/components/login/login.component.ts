import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}   // 👈 INJECT HERE

  onLogin() {
    console.log(this.email, this.password);
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/security']);
  }
}

