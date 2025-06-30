// MODELO BASE DE SERVIDOR
export interface ServidorResponse {
  id: string;
  nombre: string;
  descripcion: string;
  propietarioId: string;
  fechaCreacion: string; // viene como Instant, lo tratamos como ISO string
  miembros: MiembroResponse[];
  roles: RolResponse[];
}

export interface ServidorCreateRequest {
  nombre: string;
  descripcion: string;
}

export interface ServidorUpdateRequest {
  nombre: string;
  descripcion: string;
}
export interface MiembroResponse {
  id: string;
  userId: string;
  username: string;
  avatarUrl: string;
  roles: string[];
}

export interface MiembroAddRequest {
  userId: string; // Se refiere al username del nuevo miembro
}

export interface MiembroUpdateRolesRequest {
  userId: string;
  nuevosRoles: string[];
}
export interface RolResponse {
  id: string;
  nombre: string;
  permisos: string[];
}

export interface RolCreateRequest {
  nombre: string;
  permisos: string[];
}

export interface RolUpdateRequest {
  nuevoNombre: string;
  nuevosPermisos: string[];
}
