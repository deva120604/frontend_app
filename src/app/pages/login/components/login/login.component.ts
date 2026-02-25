import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onLogin() {

    // simple validation
    if (!this.email || !this.password) {
      alert("Please enter email and password");
      return;
    }

    // call backend login API
    this.authService.login(this.email, this.password)
      .subscribe({
        next: (res: any) => {

          // save JWT token
          localStorage.setItem("token", res.access_token);

          // redirect to dashboard
          this.router.navigate(['/dashboard']);
        },

        error: () => {
          alert("Invalid email or password");
        }
      });

  }
}
