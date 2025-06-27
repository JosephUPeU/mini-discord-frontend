import { Permiso } from './permiso.model';

export interface Rol {
  id: string;
  nombre: string;
  color: string;
  permisos: Permiso[];
}
