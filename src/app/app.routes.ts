import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PublicGuard } from './core/guards/public.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
    canActivate: [PublicGuard]
  },
  {
    path: 'mensajes',
    loadChildren: () =>
      import('./features/mensajes/mensajes.routes').then((m) => m.MENSAJES_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: 'servidores',
    loadChildren: () =>
      import('./features/servidores/servidores.routes').then((m) => m.SERVIDORES_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
