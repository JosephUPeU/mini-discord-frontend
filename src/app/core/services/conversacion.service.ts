import { Injectable } from '@angular/core';
import { Conversacion } from '../../models/conversacion.model';
import { Usuario } from '../../models/usuario.model';
import { Mensaje } from '../../models/mensaje.model';
import { CONVERSACIONES_MOCK } from '../../mocks/conversaciones.mock';
import { USUARIOS_MOCK } from '../../mocks/usuarios.mock';

@Injectable({ providedIn: 'root' })
export class ConversacionService {
  private conversaciones: Conversacion[] = CONVERSACIONES_MOCK;

  obtenerTodas(): Conversacion[] {
    return this.conversaciones;
  }

  obtenerConversacionesPorUsuario(usuarioId: string): Conversacion[] {
    return this.conversaciones.filter(c => c.usuarios.includes(usuarioId));
  }

  obtenerConversacionConUsuario(usuarioA: string, usuarioB: string): Conversacion | undefined {
    return this.conversaciones.find(c =>
      c.usuarios.includes(usuarioA) && c.usuarios.includes(usuarioB)
    );
  }

  obtenerMensajes(conversacionId: string): Mensaje[] {
    return this.conversaciones.find(c => c.id === conversacionId)?.mensajes ?? [];
  }

  enviarMensaje(conversacionId: string, mensaje: Mensaje): void {
    const conversacion = this.conversaciones.find(c => c.id === conversacionId);
    if (conversacion) {
      conversacion.mensajes.push(mensaje);
    }
  }

  crearConversacion(usuarioA: string, usuarioB: string): Conversacion {
    const nueva: Conversacion = {
      id: crypto.randomUUID(),
      usuarios: [usuarioA, usuarioB],
      mensajes: []
    };
    this.conversaciones.push(nueva);
    return nueva;
  }

  obtenerUsuarioPorId(usuarioId: string): Usuario | undefined {
    return USUARIOS_MOCK.find(u => u.id === usuarioId);
  }

  obtenerNombreDelOtroUsuario(conversacion: Conversacion, actualId: string): string {
    const otroId = conversacion.usuarios.find(id => id !== actualId);
    return this.obtenerUsuarioPorId(otroId ?? '')?.nombre ?? 'Desconocido';
  }

  obtenerAvatarDelOtroUsuario(conversacion: Conversacion, actualId: string): string {
    const otroId = conversacion.usuarios.find(id => id !== actualId);
    return this.obtenerUsuarioPorId(otroId ?? '')?.avatar ?? 'default.png';
  }
}
