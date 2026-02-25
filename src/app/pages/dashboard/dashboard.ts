import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  balance: number = 0;
transactions: any[] = [];
totalUsers: number = 0;   // 👈 ADD THIS LINE


  constructor(private service: DashboardService) {}

  ngOnInit(): void {

    this.transactions = this.service.getTransactions();

    // Step 1: Login automatically
    this.service.login().subscribe((res: any) => {

      const token = res.access_token;

      // Step 2: Call wallet API using token
      this.service.getWallet("INR", token).subscribe((wallet: any) => {
        this.balance = wallet.balance;
      });

    });
  }
}
