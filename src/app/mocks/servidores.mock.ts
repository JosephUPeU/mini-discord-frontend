import { Servidor } from '../models/servidor.model';
import { ROLES_MOCK } from './roles.mock';
import { MIEMBROS_MOCK } from './miembros.mock';
import { CANALES_MOCK } from './canales.mock';

export const SERVIDORES_MOCK: Servidor[] = [
  {
    id: 's1',
    nombre: 'UniMed Chat',
    descripcion: 'Servidor para estudiantes de medicina',
    propietarioId: 'u1',
    icono: 'assets/icons/unimed.png',
    fechaCreacion: new Date().toISOString(),
    canales: CANALES_MOCK,
    miembros: MIEMBROS_MOCK,
    roles: ROLES_MOCK
  },
  {
    id: 's2',
    nombre: 'DevTeam',
    descripcion: 'Espacio colaborativo de devs',
    propietarioId: 'u2',
    icono: '',
    fechaCreacion: new Date().toISOString(),
    canales: [],
    miembros: [],
    roles: []
  },
  {
    id: 's3',
    nombre: 'Club de Lectura',
    descripcion: 'Discutimos libros y más 📚',
    propietarioId: 'u3',
    icono: 'assets/icons/bookclub.png',
    fechaCreacion: new Date().toISOString(),
    canales: [],
    miembros: [],
    roles: []
  }
];
