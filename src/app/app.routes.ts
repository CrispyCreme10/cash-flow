import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'transactions',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/transactions/transactions-list/transactions-list.component'
          ).then((m) => m.TransactionsListComponent),
      },
      {
        path: 'add',
        loadComponent: () =>
          import(
            './features/transactions/transactions-add/transactions-add.component'
          ).then((m) => m.TransactionsAddComponent),
      },
    ],
  },
];
