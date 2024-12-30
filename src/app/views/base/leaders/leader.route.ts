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
      {
          path: 'add-leaders',
          loadComponent: () => import('./add-leaders/add-leaders.component').then(m => m.AddLeadersComponent),
          data: {
              title: 'Add Leaders'
          }
      },
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


