export interface ReaccionDto {
  emoji: string;
  usuarios: string[];
}

export interface MensajeCanalResponse {
  id: string;
  canalId: string;
  servidorId: string;
  autorId: string;
  contenido: string;
  timestamp: string; // ISO string
  adjuntos: string[];
  editado: boolean;
  reacciones: ReaccionDto[];
}

export interface MensajeCanalRequest {
  contenido: string;
  adjuntos?: string[];
}

export interface MensajeCanalEditRequest {
  mensajeId: string;
  canalId: string;
  nuevoContenido: string;
}

export interface ReaccionCanalRequest {
  mensajeId: string;
  canalId: string;
  emoji: string;
}
