import { Routes } from '@angular/router';
import { VistaServidorComponent } from './vista-servidor/vista-servidor.component';

export const SERVIDORES_ROUTES: Routes = [
  {
    path: ':id',
    component: VistaServidorComponent,
    children: [
      {
        path: 'canal/:canalId',
        loadComponent: () =>
          import('../mensajes/chat/chat.component').then(m => m.ChatComponent)
      },
      {
        path: '',
        redirectTo: 'canal',
        pathMatch: 'full'
      }
    ]
  }
];

