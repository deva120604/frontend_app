import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bot-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bot-orders.html',
  styleUrls: ['./bot-orders.css']
})
export class BotOrdersComponent {

orders = [
{id:1,type:'BUY',price:45000,volume:0.5},
{id:2,type:'SELL',price:45200,volume:0.5},
{id:3,type:'BUY',price:44800,volume:0.3}
];

}