import { Routes } from "@angular/router";

export const routes: Routes = [
  { 
    path: '',
    loadComponent: () => import('./pastors.component').then(m => m.PastorsComponent),
    data: {
        title: 'Pastors'
    },
    children:[
              {
        path: '',
        redirectTo: 'list-pastor',
        pathMatch: 'full'
      },
        {
            path: 'add-pastor',
            loadComponent: () => import('./add-pastor/add-pastor.component').then(m => m.AddPastorComponent),
            data: {
                title: 'Add Pastor'
            }
        },
              {
        path: 'list-pastor',
        loadComponent: () => import('./list-pastor/list-pastor.component').then(m => m.ListPastorComponent),
        data: {
          title: 'List of Pastors'
        }
      },
    ]
  },

];


