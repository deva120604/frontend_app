import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trades',
  standalone: true,
  imports: [SidebarComponent, RouterModule, CommonModule],
  templateUrl: './trades.component.html',
  styleUrl: './trades.component.css'
})
export class TradesComponent {

  trades = [
    { id:'T101', user:'Arun', amount:5000, status:'Completed' },
    { id:'T102', user:'Priya', amount:3000, status:'Pending' },
    { id:'T103', user:'Rahul', amount:7000, status:'Completed' }
  ];

}