import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Icons'
    },
    children: [
      {
        path: '',
        redirectTo: 'schedule-and-plans',
        pathMatch: 'full'
      },
      {
        path: 'schedule-and-plans',
        loadComponent: () => import('./schedule-plans.component').then(m => m.SchedulePlansComponent),
        data: {
          title: 'Schedules and Plans'
        }
      },
    ]
  }
];
