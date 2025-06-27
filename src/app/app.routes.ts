import { Routes } from '@angular/router';
import { MainViewComponent } from './layout/main-view/main-view.component';

export const appRoutes: Routes = [
  // Rutas SIN layout
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
  },

  // Rutas CON layout general
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'servidores',
        loadChildren: () =>
          import('./features/servidores/servidores.routes').then(m => m.SERVIDORES_ROUTES),
      },
      {
        path: '',
        redirectTo: 'servidores/1',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'servidores/1',
      }
    ]
  }
];
