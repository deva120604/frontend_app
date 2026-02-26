import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  login(email: string, password: string): Observable<any> {

    // Fake login validation
    if (email === 'admin@gmail.com' && password === '1234') {
      return of({
        access_token: 'fake-jwt-token'
      });
    }

    return new Observable(observer => {
      observer.error('Invalid credentials');
    });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}