import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuariosMock = [
    { id: 1, username: 'abi', email: 'abi@ejemplo.com', password: '1234', image: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, username: 'luna', email: 'luna@correo.com', password: 'abcd', image: 'https://i.pravatar.cc/150?img=2' }
  ];

  login(email: string, password: string): Observable<{ token: string }> {
    const user = this.usuariosMock.find(u => u.email === email && u.password === password);
    return user ? of({ token: 'mock-jwt-token-' + user.id }).pipe(delay(500)) : throwError(() => new Error('Credenciales inválidas'));
  }

  register(username: string, email: string, password: string): Observable<{ message: string }> {
    const exists = this.usuariosMock.find(u => u.email === email);
    if (exists) return throwError(() => new Error('El email ya está registrado'));
    this.usuariosMock.push({ id: this.usuariosMock.length + 1, username, email, password, image: 'https://i.pravatar.cc/150?img=3' });
    return of({ message: 'Usuario registrado correctamente' }).pipe(delay(500));
  }
}