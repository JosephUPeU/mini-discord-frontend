import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MensajeCanalResponse,
  MensajeCanalRequest,
  MensajeCanalEditRequest,
  ReaccionCanalRequest
} from '../../models/mensaje.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MensajesService {
  private baseUrl = 'http://localhost:8080/api/mensajes';

  constructor(private http: HttpClient) {}

  private authHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    };
  }

  // Obtener historial de mensajes de un canal
  getMensajesPorCanal(canalId: string): Observable<MensajeCanalResponse[]> {
    return this.http.get<MensajeCanalResponse[]>(
      `${this.baseUrl}/canal/${canalId}`,
      this.authHeaders()
    );
  }

  // Enviar mensaje a un canal
  enviarMensaje(canalId: string, request: MensajeCanalRequest): Observable<MensajeCanalResponse> {
    return this.http.post<MensajeCanalResponse>(
      `${this.baseUrl}/canal/${canalId}`,
      request,
      this.authHeaders()
    );
  }

  // Editar mensaje
  editarMensaje(request: MensajeCanalEditRequest): Observable<MensajeCanalResponse> {
    return this.http.put<MensajeCanalResponse>(
      `${this.baseUrl}/${request.mensajeId}`,
      request,
      this.authHeaders()
    );
  }

  // Eliminar mensaje
  eliminarMensaje(mensajeId: string, canalId: string): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/${mensajeId}?canalId=${canalId}`,
      this.authHeaders()
    );
  }

  // Reaccionar a un mensaje
  reaccionar(request: ReaccionCanalRequest): Observable<MensajeCanalResponse> {
    return this.http.post<MensajeCanalResponse>(
      `${this.baseUrl}/${request.mensajeId}/reaccion`,
      request,
      this.authHeaders()
    );
  }
}
