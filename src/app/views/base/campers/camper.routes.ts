import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./campers.component').then(m => m.CampersComponent),
    data: {
      title: 'Campers'
    },
    children: [
      {
        path: '',
        redirectTo: 'list-campers',
        pathMatch: 'full'
      },
      {
        path: 'list-campers',
        loadComponent: () => import('./list-campers/list-campers.component').then(m => m.ListCampersComponent),
        data: {
          title: 'List of Campers'
        }
      },
      {
        path: 'add-camper',
        loadComponent: () => import('./add-camper/add-camper.component').then(m => m.AddCamperComponent),
        data: {
          title: 'Add Camper'
        }
      },
    ]
  },

];