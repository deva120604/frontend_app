import { Routes } from '@angular/router';

export const routes: Routes = [

  // ⭐ MAIN LAYOUT ROUTES
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout')
        .then(m => m.MainLayoutComponent),

    children: [

      // Dashboard
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard')
            .then(m => m.DashboardComponent)
      },

      // ✅ Wallet Page (NEW)
      {
        path: 'wallet',
        loadComponent: () =>
          import('./pages/wallet/wallet')
            .then(m => m.WalletComponent)
      },
      {
  path: 'transactions',
  loadComponent: () =>
    import('./pages/transactions/transactions')
      .then(m => m.TransactionsComponent)
},
{
  path: 'settings',
  loadComponent: () =>
    import('./pages/settings/settings')
      .then(m => m.SettingsComponent)
},

    ]
  },

  // ⭐ DEFAULT ROUTE → Dashboard
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  // ⭐ FALLBACK
  {
    path: '**',
    redirectTo: 'dashboard'
  },
 
];