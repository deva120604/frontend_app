import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bot-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bot-dashboard.html',
  styleUrls: ['./bot-dashboard.css']
})
export class BotDashboardComponent {

  status = "Running";
  orders = 150;
  profit = 1250;

  toggleBot(){
    this.status = this.status === "Running" ? "Stopped" : "Running";
  }

}