import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css'
})
export class TransactionsComponent implements OnInit {

  transactions: any[] = [];

  constructor(private walletService: WalletService) {}

  ngOnInit() {
    this.walletService.getTransactions().subscribe((res: any) => {
      this.transactions = res;
    });
  }
}