import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [SidebarComponent, RouterModule, CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

transactions = [
{ id:'TX101', user:'Arun', amount:2000, status:'Success' },
{ id:'TX102', user:'Priya', amount:1500, status:'Pending' },
{ id:'TX103', user:'Rahul', amount:5000, status:'Failed' }
];

}