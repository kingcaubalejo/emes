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
        loadChildren: () => import('./leaders/leader.route').then(m => m.routes),
      },
      {
        path: 'campers',
        loadChildren: () => import('./campers/camper.routes').then(m => m.routes),
        data: {
          title: 'Campers'
        }
      }
    ]
  }
];


