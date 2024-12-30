import { Routes } from "@angular/router";

export const routes: Routes = [
  { 
    path: '',
    loadComponent: () => import('./leaders.component').then(m => m.LeadersComponent),
    data: {
        title: 'Leaders'
    },
    children:[
              {
        path: '',
        redirectTo: 'list-leaders',
        pathMatch: 'full'
      },
        // {
        //     path: 'add-pastor',
        //     loadComponent: () => import('./add-pastor/add-pastor.component').then(m => m.AddPastorComponent),
        //     data: {
        //         title: 'Add Pastor'
        //     }
        // },
        {
        path: 'list-leaders',
        loadComponent: () => import('./list-leaders/list-leaders.component').then(m => m.ListLeadersComponent),
        data: {
          title: 'List of Leaders'
        }
      },
    ]
  },

];


