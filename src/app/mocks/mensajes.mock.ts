import { Mensaje } from '../models/mensaje.model';

export const MENSAJES_MOCK: Mensaje[] = [
  {
    id: 'm1',
    canalId: 'c1',
    usuarioId: 'u1',
    contenido: '¡Hola a todos! Bienvenidos al servidor 🎉',
    fecha: new Date().toISOString(),
    timestamp: Date.now().toString(),
    reacciones: [
      {
        emoji: '👍',
        usuarios: ['u2']
      }
    ]
  },
  {
    id: 'm2',
    canalId: 'c1',
    usuarioId: 'u2',
    contenido: '¡Gracias Abi! Ya revisé las reglas',
    fecha: new Date().toISOString(),
    timestamp: Date.now().toString(),
    editado: true
  },
  {
    id: 'm3',
    canalId: 'c2',
    usuarioId: 'u3',
    contenido: '¿Dónde puedo encontrar el temario?',
    fecha: new Date().toISOString(),
    timestamp: Date.now().toString()
  }
];
