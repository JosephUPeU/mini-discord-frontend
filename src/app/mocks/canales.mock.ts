import { Canal } from '../models/canal.model';

export const CANALES_MOCK: Canal[] = [
  {
    id: 'c1',
    nombre: 'general',
    tipo: 'texto',
    privado: false,
    categoria: 'Comunidad',
    descripcion: 'Chat general de bienvenida',
    permisos: [
      {
        id: 'p1',
        canalId: 'c1',
        rolId: 'r1', // Admin
        verCanal: true,
        escribirMensajes: true,
        eliminarMensajes: true
      },
      {
        id: 'p2',
        canalId: 'c1',
        rolId: 'r3', // Miembro común
        verCanal: true,
        escribirMensajes: true,
        eliminarMensajes: false
      }
    ]
  },
  {
    id: 'c2',
    nombre: 'ayuda',
    tipo: 'texto',
    privado: false,
    categoria: 'Soporte',
    descripcion: 'Resuelve tus dudas aquí',
    permisos: [
      {
        id: 'p3',
        canalId: 'c2',
        rolId: 'r1',
        verCanal: true,
        escribirMensajes: true,
        eliminarMensajes: true
      },
      {
        id: 'p4',
        canalId: 'c2',
        rolId: 'r4', // Invitado
        verCanal: true,
        escribirMensajes: false,
        eliminarMensajes: false
      }
    ]
  },
  {
    id: 'c3',
    nombre: 'voz-reunión',
    tipo: 'voz',
    privado: true,
    categoria: 'Voz',
    descripcion: 'Canal de voz para reuniones privadas',
    permisos: [
      {
        id: 'p5',
        canalId: 'c3',
        rolId: 'r2', // Moderador
        verCanal: true,
        escribirMensajes: false,
        eliminarMensajes: false
      },
      {
        id: 'p6',
        canalId: 'c3',
        rolId: 'r3', // Miembro común
        verCanal: false,
        escribirMensajes: false,
        eliminarMensajes: false
      }
    ]
  },
  {
    id: 'c4',
    nombre: 'staff',
    tipo: 'texto',
    privado: true,
    categoria: 'Administración',
    descripcion: 'Solo visible para el staff',
    permisos: [
      {
        id: 'p7',
        canalId: 'c4',
        rolId: 'r1',
        verCanal: true,
        escribirMensajes: true,
        eliminarMensajes: true
      }
    ]
  },
  {
    id: 'c5',
    nombre: 'canal-vacio',
    tipo: 'texto',
    privado: true,
    categoria: 'Pruebas',
    descripcion: 'No tiene permisos asignados',
    permisos: []
  }
];
