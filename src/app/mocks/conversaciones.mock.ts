import { Conversacion } from '../models/conversacion.model';

export const CONVERSACIONES_MOCK: Conversacion[] = [
  {
    id: 'conv1',
    usuarios: ['u1', 'u2'],
    mensajes: [
      {
        id: 'm1',
        canalId: '', // no aplica en MD
        usuarioId: 'u1',
        contenido: '¡Hola! ¿Cómo estás?',
        fecha: '2024-06-01T10:00:00Z',
        timestamp: '1717236000000',
        editado: false,
        reacciones: [
          {
            emoji: '👍',
            usuarios: ['u2']
          }
        ]
      },
      {
        id: 'm2',
        canalId: '',
        usuarioId: 'u2',
        contenido: 'Todo bien, ¿y tú?',
        fecha: '2024-06-01T10:01:00Z',
        timestamp: '1717236060000',
        editado: true,
        reacciones: [
          {
            emoji: '❤️',
            usuarios: ['u1']
          }
        ]
      }
    ]
  },
  {
    id: 'conv2',
    usuarios: ['u3', 'u4'],
    mensajes: [
      {
        id: 'm3',
        canalId: '',
        usuarioId: 'u3',
        contenido: '¿Tienes tiempo para una llamada?',
        fecha: '2024-06-02T15:30:00Z',
        timestamp: '1717321800000',
        editado: false
      }
    ]
  },
  {
    id: 'conv3',
    usuarios: ['u1', 'u5'],
    mensajes: [
      {
        id: 'm4',
        canalId: '',
        usuarioId: 'u5',
        contenido: 'Estoy revisando los mocks, todo se ve bien.',
        fecha: '2024-06-03T08:45:00Z',
        timestamp: '1717404300000',
        editado: false
      },
      {
        id: 'm5',
        canalId: '',
        usuarioId: 'u1',
        contenido: 'Genial, avisame si necesitas algo más.',
        fecha: '2024-06-03T08:47:00Z',
        timestamp: '1717404420000',
        editado: false
      },
      {
        id: 'm6',
        canalId: '',
        usuarioId: 'u5',
        contenido: 'Sí, gracias 😊',
        fecha: '2024-06-03T08:48:00Z',
        timestamp: '1717404480000',
        reacciones: [
          {
            emoji: '✨',
            usuarios: ['u1']
          }
        ]
      }
    ]
  }
];
