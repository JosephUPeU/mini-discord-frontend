import { Usuario } from '../models/usuario.model';

export const USUARIOS_MOCK: Usuario[] = [
  {
    id: 'u1',
    nombre: 'Abi',
    email: 'abi@example.com',
    avatar: 'assets/icons/abi.png',
    fechaRegistro: new Date().toISOString(),
    servidores: ['s1'],
    amigos: ['u2', 'u3']
  },
  {
    id: 'u2',
    nombre: 'Leo',
    email: 'leo@example.com',
    avatar: '',
    fechaRegistro: new Date().toISOString(),
    servidores: ['s1', 's2'],
    amigos: ['u1']
  },
  {
    id: 'u3',
    nombre: 'Nati',
    email: 'nati@example.com',
    avatar: 'assets/icons/nati.png',
    fechaRegistro: new Date().toISOString(),
    servidores: ['s3'],
    amigos: ['u1']
  }
];
