import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PublicGuard } from './core/guards/public.guard';
import { MainViewComponent } from './layout/main-view/main-view.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
    canActivate: [PublicGuard]
  },
  {
    path: '',
    component: MainViewComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'mensajes',
        loadChildren: () =>
          import('./features/mensajes/mensajes.routes').then((m) => m.MENSAJES_ROUTES)
      },
      {
        path: 'servidores',
        loadChildren: () =>
          import('./features/servidores/servidores.routes').then((m) => m.SERVIDORES_ROUTES)
      },
      {
        path: '',
        redirectTo: 'mensajes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
