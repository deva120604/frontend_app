import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {

  answer = '';

  constructor(private router: Router) {}   // 👈 Router inject panninom

  verify() {
    console.log("Security Answer:", this.answer);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');   // 👈 login remove pannum
    this.router.navigate(['/']);             // 👈 login page ku pogum
  }

}
