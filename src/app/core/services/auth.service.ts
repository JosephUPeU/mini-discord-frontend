import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserResponse } from '../../models/user-response';  
import { UserRegisterRequest } from '../../models/user-register-request';
import { LoginRequest } from '../../models/login-request';
import { LoginResponse } from '../../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Asegúrate de que estas URLs base coincidan con las rutas del API Gateway
  private registerUrl = 'http://localhost:8080/api/users/register';
  private loginUrl = 'http://localhost:8080/api/auth/login';

  // BehaviorSubject para manejar el estado de autenticación de forma reactiva
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) { }

  private hasToken(): boolean {
    return !!localStorage.getItem('jwt_token');
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Método para el registro de usuario
  register(request: UserRegisterRequest): Observable<UserResponse> { // Asumiendo que UserResponse es la salida
    return this.http.post<UserResponse>(this.registerUrl, request).pipe(
      catchError(this.handleError)
    );
  }

  // Método para el inicio de sesión
   login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, request).pipe(
      tap(response => {
        // ✅ Guardamos el token correctamente usando la propiedad `accessToken`
        localStorage.setItem('jwt_token', response.token);

        // ✅ Decodificamos el token para obtener el username (campo `sub`)
        const payload = this.decodeJWT(response.token);
        if (payload?.sub) {
          localStorage.setItem('username', payload.sub);
        }

        this.isAuthenticatedSubject.next(true);
      }),
      catchError(this.handleError)
    );
  }
  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('username'); // Opcional
    this.isAuthenticatedSubject.next(false); // Emitir que el usuario no está autenticado
  }

  // Obtener el token almacenado
  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  // Obtener el username del token (si lo almacenas) o directamente del localStorage
  getUsername(): string | null {
    return localStorage.getItem('username'); // O decodificar el JWT aquí si el username está solo en el token
  }

  private decodeJWT(token: string): any | null {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch {
      return null;
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      if (error.status === 409) { // Conflict for registration (UserAlreadyExistsException)
        errorMessage = 'El usuario o correo electrónico ya existe.';
      } else if (error.status === 401) { // Unauthorized for login
        errorMessage = 'Credenciales incorrectas.';
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        if (error.error && error.error.message) {
            errorMessage = error.error.message; // Si el backend devuelve un mensaje de error específico
        }
      }
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}