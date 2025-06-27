import { Injectable } from '@angular/core';
import { SERVIDORES_MOCK } from '../../mocks/servidores.mock';
import { USUARIOS_MOCK } from '../../mocks/usuarios.mock';
import { Servidor } from '../../models/servidor.model';
import { Canal } from '../../models/canal.model';
import { Miembro } from '../../models/miembro.model';
import { Rol } from '../../models/rol.model';
import { Usuario } from '../../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class ServidorService {
  private servidores: Servidor[] = SERVIDORES_MOCK;
  private usuarios: Usuario[] = USUARIOS_MOCK;

  // Obtener un servidor completo por ID
  obtenerServidor(id: string): Servidor | undefined {
    return this.servidores.find(s => s.id === id);
  }

  // Obtener todos los servidores donde participa el usuario
  obtenerServidoresDeUsuario(usuarioId: string): Servidor[] {
    return this.servidores.filter(s => s.miembros.some(m => m.usuarioId === usuarioId));
  }

  // Obtener todos los canales de un servidor
  obtenerCanales(idServidor: string): Canal[] {
    return this.obtenerServidor(idServidor)?.canales ?? [];
  }

  // Obtener solo los canales que el usuario puede ver (según su rol)
  obtenerCanalesVisibles(idServidor: string, usuarioId: string): Canal[] {
    const servidor = this.obtenerServidor(idServidor);
    if (!servidor) return [];

    const miembro = servidor.miembros.find(m => m.usuarioId === usuarioId);
    if (!miembro) return [];

    const rol = servidor.roles.find(r => r.id === miembro.rolId);
    if (!rol) return [];

    return servidor.canales.filter(canal =>
      canal.permisos.some(p => p.rolId === rol.id && p.verCanal)
    );
  }

  // Obtener miembros de un servidor
  obtenerMiembros(idServidor: string): Miembro[] {
    return this.obtenerServidor(idServidor)?.miembros ?? [];
  }

  // Obtener un miembro específico
  obtenerMiembro(idServidor: string, usuarioId: string): Miembro | undefined {
    return this.obtenerServidor(idServidor)?.miembros.find(m => m.usuarioId === usuarioId);
  }

  // Obtener todos los roles de un servidor
  obtenerRoles(idServidor: string): Rol[] {
    return this.obtenerServidor(idServidor)?.roles ?? [];
  }

  // Obtener el rol asignado a un miembro
  obtenerRolDeMiembro(idServidor: string, usuarioId: string): Rol | undefined {
    const miembro = this.obtenerMiembro(idServidor, usuarioId);
    return this.obtenerServidor(idServidor)?.roles.find(r => r.id === miembro?.rolId);
  }

  // Obtener nombre del rol de un miembro
  obtenerNombreRol(idServidor: string, usuarioId: string): string {
    return this.obtenerRolDeMiembro(idServidor, usuarioId)?.nombre ?? 'Invitado';
  }

  // Obtener color del rol
  obtenerColorRol(idServidor: string, usuarioId: string): string {
    return this.obtenerRolDeMiembro(idServidor, usuarioId)?.color ?? '#ccc';
  }

  // Obtener todos los usuarios registrados
  obtenerTodosLosUsuarios(): Usuario[] {
    return this.usuarios;
  }

  // Obtener un usuario por su ID
  obtenerUsuario(idUsuario: string): Usuario | undefined {
    return this.usuarios.find(u => u.id === idUsuario);
  }

  // Verifica si un usuario tiene permiso específico en un canal
  tienePermiso(
    idServidor: string,
    idCanal: string,
    usuarioId: string,
    tipo: 'verCanal' | 'escribirMensajes' | 'eliminarMensajes'
  ): boolean {
    const servidor = this.obtenerServidor(idServidor);
    if (!servidor) return false;

    const miembro = servidor.miembros.find(m => m.usuarioId === usuarioId);
    if (!miembro) return false;

    const canal = servidor.canales.find(c => c.id === idCanal);
    if (!canal) return false;

    return canal.permisos.some(p => p.rolId === miembro.rolId && p[tipo]);
  }
}
