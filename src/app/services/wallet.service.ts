import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private baseUrl = 'http://localhost:8000';
  private currency = 'INR';

  constructor(private http: HttpClient) {}

  // Get Wallet Balance
  getWallet() {
    return this.http.get(`${this.baseUrl}/wallet/${this.currency}`);
  }

  // Deposit Money
  deposit(amount: number) {
    return this.http.post(
      `${this.baseUrl}/wallet/credit/${this.currency}`,
      { amount }
    );
  }

  // Withdraw Money
  withdraw(amount: number) {
    return this.http.post(
      `${this.baseUrl}/wallet/debit/${this.currency}`,
      { amount }
    );
  }

  // ✅ ADD THIS METHOD
  getTransactions() {
    return this.http.get(`${this.baseUrl}/wallet/transactions/${this.currency}`);
  }
}