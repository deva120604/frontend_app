import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wallet.html',
  styleUrl: './wallet.css'
})
export class WalletComponent {

  balance: number = 0;
  depositAmount: number = 0;
  withdrawAmount: number = 0;

  deposit() {
    if (this.depositAmount > 0) {
      this.balance += this.depositAmount;
      this.depositAmount = 0;
    }
  }

  withdraw() {
    if (this.withdrawAmount > 0 && this.withdrawAmount <= this.balance) {
      this.balance -= this.withdrawAmount;
      this.withdrawAmount = 0;
    } else {
      alert("Insufficient Balance");
    }
  }
}