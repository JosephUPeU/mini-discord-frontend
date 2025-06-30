import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ServidorCreateRequest,
  ServidorResponse,
  ServidorUpdateRequest,
  MiembroAddRequest,
  MiembroResponse,
  MiembroUpdateRolesRequest,
  RolCreateRequest,
  RolResponse,
  RolUpdateRequest
} from '../../models/servidor.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServidoresService {
  private baseUrl = 'http://localhost:8080/api/servidores';

  constructor(private http: HttpClient) {}

  // ✅ Crear un nuevo servidor (NO se manda userId)
  crearServidor(request: ServidorCreateRequest): Observable<ServidorResponse> {
    return this.http.post<ServidorResponse>(`${this.baseUrl}`, request);
  }

  // ✅ Obtener todos los servidores del usuario autenticado
  getServidoresDelUsuario(): Observable<ServidorResponse[]> {
    return this.http.get<ServidorResponse[]>(`${this.baseUrl}/usuario`);
  }

  // ✅ Obtener un servidor específico por ID
  getServidorById(servidorId: string): Observable<ServidorResponse> {
    return this.http.get<ServidorResponse>(`${this.baseUrl}/${servidorId}`);
  }

  // ✅ Editar un servidor
  updateServidor(servidorId: string, request: ServidorUpdateRequest): Observable<ServidorResponse> {
    return this.http.put<ServidorResponse>(`${this.baseUrl}/${servidorId}`, request);
  }

  // ✅ Eliminar un servidor
  deleteServidor(servidorId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${servidorId}`);
  }

  // ✅ Añadir miembro a un servidor
  addMiembro(servidorId: string, request: MiembroAddRequest): Observable<ServidorResponse> {
    return this.http.post<ServidorResponse>(`${this.baseUrl}/${servidorId}/miembros`, request);
  }

  // ✅ Eliminar miembro de un servidor
  removeMiembro(servidorId: string, username: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${servidorId}/miembros/${username}`);
  }

  // ✅ Actualizar roles de un miembro
  updateMiembroRoles(
    servidorId: string,
    username: string,
    request: MiembroUpdateRolesRequest
  ): Observable<ServidorResponse> {
    return this.http.put<ServidorResponse>(
      `${this.baseUrl}/${servidorId}/miembros/${username}/roles`,
      request
    );
  }

  // ✅ Obtener miembros de un servidor
  getMiembros(servidorId: string): Observable<MiembroResponse[]> {
    return this.http.get<MiembroResponse[]>(`${this.baseUrl}/${servidorId}/miembros`);
  }

  // ✅ Obtener roles de un miembro
  getRolesDeUsuario(servidorId: string, username: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/${servidorId}/miembros/${username}/roles`);
  }

  // ✅ Obtener permisos de un miembro
  getPermisosDeUsuario(servidorId: string, username: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/${servidorId}/miembros/${username}/permisos`);
  }

  // ✅ Crear un nuevo rol
  crearRol(servidorId: string, request: RolCreateRequest): Observable<ServidorResponse> {
    return this.http.post<ServidorResponse>(`${this.baseUrl}/${servidorId}/roles`, request);
  }

  // ✅ Editar un rol
  editarRol(servidorId: string, rolId: string, request: RolUpdateRequest): Observable<RolResponse> {
    return this.http.put<RolResponse>(`${this.baseUrl}/${servidorId}/roles/${rolId}`, request);
  }

  // ✅ Eliminar un rol
  eliminarRol(servidorId: string, rolId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${servidorId}/roles/${rolId}`);
  }

  // ✅ Obtener todos los roles de un servidor
  getRoles(servidorId: string): Observable<RolResponse[]> {
    return this.http.get<RolResponse[]>(`${this.baseUrl}/${servidorId}/roles`);
  }

  // ✅ Obtener un rol específico por nombre
  getRolPorNombre(servidorId: string, rolNombre: string): Observable<RolResponse> {
    return this.http.get<RolResponse>(`${this.baseUrl}/${servidorId}/roles/${rolNombre}`);
  }
}
