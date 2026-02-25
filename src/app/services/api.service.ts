import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) {}

  // Get wallet balance
  getWallet(currency: string) {
    return this.http.get(this.baseUrl + `/wallet/${currency}`);
  }

}
