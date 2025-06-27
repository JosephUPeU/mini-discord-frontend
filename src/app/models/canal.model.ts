import { PermisoCanal } from "./permisocanal.model";

export interface Canal {
  id: string;
  nombre: string;
  tipo: 'texto' | 'voz';
  privado: boolean;
  categoria: string;
  descripcion?: string;
  permisos: PermisoCanal[];
}
