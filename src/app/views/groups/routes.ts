import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Groups'
    },
    children: [
      {
        path: '',
        redirectTo: 'churches',
        pathMatch: 'full'
      },
      {
        path: 'churches',
        loadComponent: () => import('./churches/churches.component').then(m => m.ChurchesComponent),
        data: {
          title: 'Churches'
        }
      },
      {
        path: 'teams',
        loadComponent: () => import('./teams/teams.component').then(m => m.TeamsComponent),
        data: {
          title: 'Teams'
        }
      }
    ]
  }
];

