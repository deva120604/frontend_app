import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { TradesComponent } from './trades/trades.component';
import { TransactionsComponent } from './transactions/transactions.component';

export const routes: Routes = [

{ path:'', component: LoginComponent },

{ path:'dashboard', component: DashboardComponent },

{ path:'users', component: UsersComponent },

{ path:'trades', component: TradesComponent },

{ path:'transactions', component: TransactionsComponent }

];