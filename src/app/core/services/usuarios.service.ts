import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Usuario {
  id: number;
  username: string;
  email: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private usuarios: Usuario[] = [
    { id: 1, username: 'abi', email: 'abi@ejemplo.com', image: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, username: 'luna', email: 'luna@correo.com', image: 'https://i.pravatar.cc/150?img=2' }
  ];

  listarUsuarios(): Observable<Usuario[]> {
    return of(this.usuarios).pipe(delay(500));
  }

  obtenerUsuario(id: number): Observable<Usuario | undefined> {
    return of(this.usuarios.find(u => u.id === id)).pipe(delay(500));
  }
}
