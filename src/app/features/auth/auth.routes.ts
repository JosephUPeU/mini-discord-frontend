import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PublicGuard } from '../../core/guards/public.guard';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];
