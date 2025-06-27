import { Rol } from '../models/rol.model';

export const ROLES_MOCK: Rol[] = [
  {
    id: 'r1',
    nombre: 'Administrador',
    color: '#e74c3c',
    permisos: ['VER_CANALES', 'ESCRIBIR_MENSAJES', 'ELIMINAR_MENSAJES', 'ADMINISTRAR_ROLES', 'GESTIONAR_CANALES']
  },
  {
    id: 'r2',
    nombre: 'Moderador',
    color: '#9b59b6',
    permisos: ['VER_CANALES', 'ESCRIBIR_MENSAJES', 'ELIMINAR_MENSAJES']
  },
  {
    id: 'r3',
    nombre: 'Miembro',
    color: '#2980b9',
    permisos: ['VER_CANALES', 'ESCRIBIR_MENSAJES']
  },
  {
    id: 'r4',
    nombre: 'Visitante',
    color: '#95a5a6',
    permisos: ['VER_CANALES']
  }
];
