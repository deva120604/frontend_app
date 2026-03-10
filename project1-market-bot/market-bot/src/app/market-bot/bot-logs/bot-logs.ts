import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bot-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bot-logs.html',
  styleUrls: ['./bot-logs.css']
})
export class BotLogsComponent {

  logs = [
    "Buy order executed at $45000",
    "Sell order executed at $45200",
    "Spread adjusted to 0.5%",
    "New market signal detected",
    "Bot executed 5 trades successfully"
  ];

}