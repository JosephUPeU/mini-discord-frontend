import { Routes } from '@angular/router';
import { ListaDmComponent } from './lista-dm/lista-dm.component';
import { VistaDmComponent } from './vista-dm/vista-dm.component';

export const MENSAJES_ROUTES: Routes = [
  {
    path: '',
    component: ListaDmComponent
  },
  {
    path: ':id',
    component: VistaDmComponent
  }
];
