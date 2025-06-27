import { Injectable } from '@angular/core';
import { USUARIOS_MOCK } from '../../mocks/usuarios.mock';
import { Usuario } from '../../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private usuarios = USUARIOS_MOCK;

  obtenerTodos(): Usuario[] {
    return this.usuarios;
  }

  obtenerPorId(id: string): Usuario | undefined {
    return this.usuarios.find(u => u.id === id);
  }

  buscarPorNombre(nombre: string): Usuario[] {
    return this.usuarios.filter(u =>
      u.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  obtenerAmigos(idUsuario: string): Usuario[] {
    const usuario = this.obtenerPorId(idUsuario);
    if (!usuario) return [];
    return this.usuarios.filter(u => usuario.amigos.includes(u.id));
  }
}
