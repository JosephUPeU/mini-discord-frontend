import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CanalCreateRequest,
  CanalResponse,
  CanalUpdateRequest,
  PermisoCanalRequest
} from '../../models/canal.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CanalesService {
  private baseUrl = 'http://localhost:8080/api/canales';

  constructor(private http: HttpClient) {}

  private authHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    };
  }

  // ✅ Listar canales de un servidor
  getCanalesPorServidorId(servidorId: string): Observable<CanalResponse[]> {
    return this.http.get<CanalResponse[]>(`${this.baseUrl}/servidor/${servidorId}`, this.authHeaders());
  }

  // ✅ Obtener canal por ID
  getCanalPorId(canalId: string): Observable<CanalResponse> {
    return this.http.get<CanalResponse>(`${this.baseUrl}/${canalId}`, this.authHeaders());
  }

  // ✅ Crear canal
  crearCanal(request: CanalCreateRequest): Observable<CanalResponse> {
    return this.http.post<CanalResponse>(this.baseUrl, request, this.authHeaders());
  }

  // ✅ Actualizar canal
  actualizarCanal(canalId: string, request: CanalUpdateRequest): Observable<CanalResponse> {
    return this.http.put<CanalResponse>(`${this.baseUrl}/${canalId}`, request, this.authHeaders());
  }

  // ✅ Eliminar canal
  eliminarCanal(canalId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${canalId}`, this.authHeaders());
  }

  // ✅ Agregar permisos a canal
  agregarPermiso(canalId: string, request: PermisoCanalRequest): Observable<CanalResponse> {
    return this.http.post<CanalResponse>(`${this.baseUrl}/${canalId}/permisos`, request, this.authHeaders());
  }

  // ✅ Actualizar permiso de un rol en canal
  actualizarPermiso(canalId: string, rol: string, request: PermisoCanalRequest): Observable<CanalResponse> {
    return this.http.put<CanalResponse>(`${this.baseUrl}/${canalId}/permisos/${rol}`, request, this.authHeaders());
  }

  // ✅ Eliminar permiso de un rol
  eliminarPermiso(canalId: string, rol: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${canalId}/permisos/${rol}`, this.authHeaders());
  }

  // ✅ Obtener detalles internos de un canal (uso inter-servicios)
  getCanalDetailsInternal(canalId: string): Observable<CanalResponse> {
    return this.http.get<CanalResponse>(`${this.baseUrl}/${canalId}/details-internal`, this.authHeaders());
  }
}
