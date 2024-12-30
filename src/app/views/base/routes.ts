import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'People'
    },
    children: [
      {
        path: '',
        redirectTo: 'pastors',
        pathMatch: 'full'
      },
      {
        path: 'pastors',
        loadChildren: () => import('./pastors/pastor.route').then((m) => m.routes)
      },
      {
        path: 'leaders',
        loadComponent: () => import('./leaders/leaders.component').then(m => m.LeadersComponent),
        data: {
          title: 'Leaders'
        }
      },
      {
        path: 'campers',
        loadComponent: () => import('./campers/campers.component').then(m => m.CampersComponent),
        data: {
          title: 'Campers'
        }
      }
    ]
  }
];


