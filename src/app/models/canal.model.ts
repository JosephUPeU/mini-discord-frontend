export interface PermisoCanalResponse {
  id: number;
  rol: string;
  puedeLeer: boolean;
  puedeEscribir: boolean;
}

export interface CanalResponse {
  id: string;
  servidorId: string;
  nombre: string;
  tipo: 'TEXTO' | 'VOZ';
  permisos: PermisoCanalResponse[];
}

export interface CanalCreateRequest {
  servidorId: string;
  nombre: string;
  tipo: 'TEXTO' | 'VOZ';
}

export interface CanalUpdateRequest {
  nombre: string;
  tipo: 'TEXTO' | 'VOZ';
}

export interface PermisoCanalRequest {
  rol: string;
  puedeLeer: boolean;
  puedeEscribir: boolean;
}
