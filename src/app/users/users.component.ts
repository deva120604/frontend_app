import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  constructor(private router: Router) {}

  users = [
    {id:1,name:'Arun',email:'arun@gmail.com'},
    {id:2,name:'Priya',email:'priya@gmail.com'},
    {id:3,name:'Rahul',email:'rahul@gmail.com'}
  ];

  logout(){
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/']);
  }

}