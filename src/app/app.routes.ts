import { Routes } from '@angular/router';

import { LoginComponent } from '@app/pages/login/components/login/login.component';
import { RegisterComponent } from '@app/pages/login/components/register/register.component';

export const routes: Routes = [

  // ⭐ DEFAULT ROUTE → LOGIN FIRST
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ⭐ AUTH ROUTES (NO LAYOUT)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // ⭐ MAIN APP ROUTES WITH LAYOUT
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout')
        .then(m => m.MainLayoutComponent),

    children: [
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardComponent) },
      { path: 'wallet', loadComponent: () => import('./pages/wallet/wallet').then(m => m.WalletComponent) },
      { path: 'transactions', loadComponent: () => import('./pages/transactions/transactions').then(m => m.TransactionsComponent) },
      { path: 'settings', loadComponent: () => import('./pages/settings/settings').then(m => m.SettingsComponent) }
    ]
  },

  // ⭐ FALLBACK
  { path: '**', redirectTo: 'login' }
];