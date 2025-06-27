import { Canal } from './canal.model';
import { Miembro } from './miembro.model';
import { Rol } from './rol.model';

export interface Servidor {
  id: string;
  nombre: string;
  descripcion?: string;
  propietarioId: string;
  icono?: string;
  fechaCreacion: string;
  canales: Canal[];
  miembros: Miembro[];
  roles: Rol[];
}
