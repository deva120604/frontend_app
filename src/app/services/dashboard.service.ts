import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) {}

  // Auto login API
 login() {
  return this.http.post(`${this.baseUrl}/auth/login`, {
    email: "test@gmail.com",   // ✅ correct field name
    password: "123456"
  });
}


  // Wallet API
  getWallet(currency: string, token: string) {
    return this.http.get(`${this.baseUrl}/wallet/${currency}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Static transactions
  getTransactions() {
    return [
      { id: 1, type: 'Deposit', amount: 5000, status: 'Success', date: '04-02-2026' },
      { id: 2, type: 'Withdraw', amount: -2000, status: 'Pending', date: '03-02-2026' }
    ];
  }
}

