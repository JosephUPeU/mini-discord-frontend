import { Injectable } from '@angular/core';
import { CONVERSACIONES_MOCK } from '../../mocks/conversaciones.mock';
import { MENSAJES_MOCK } from '../../mocks/mensajes.mock';
import { Mensaje } from '../../models/mensaje.model';
import { Conversacion } from '../../models/conversacion.model';

@Injectable({ providedIn: 'root' })
export class MensajeService {
  private mensajes = MENSAJES_MOCK;
  private conversaciones = CONVERSACIONES_MOCK;

  // Canal general
  obtenerMensajesPorCanal(canalId: string): Mensaje[] {
    return this.mensajes
      .filter(m => m.canalId === canalId)
      .sort((a, b) => parseInt(a.timestamp) - parseInt(b.timestamp));
  }

  enviarMensajeACanal(mensaje: Mensaje): void {
    this.mensajes.push(mensaje);
  }

  // Mensajes directos
  obtenerConversacion(usuarios: string[]): Conversacion | undefined {
    return this.conversaciones.find(c =>
      usuarios.every(id => c.usuarios.includes(id)) &&
      c.usuarios.length === usuarios.length
    );
  }

  obtenerMensajesPrivados(idUsuario: string): Conversacion[] {
    return this.conversaciones.filter(c => c.usuarios.includes(idUsuario));
  }

  enviarMensajePrivado(conversacionId: string, mensaje: Mensaje): void {
    const conv = this.conversaciones.find(c => c.id === conversacionId);
    if (conv) {
      conv.mensajes.push(mensaje);
    }
  }

  crearConversacion(usuarios: string[]): Conversacion {
    const nueva: Conversacion = {
      id: crypto.randomUUID(),
      usuarios,
      mensajes: []
    };
    this.conversaciones.push(nueva);
    return nueva;
  }
}
