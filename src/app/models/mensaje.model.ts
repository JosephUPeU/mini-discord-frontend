import { Reaccion } from "./reaccion.model";

export interface Mensaje {
  id: string;
  canalId: string;      // Chat de canal
  usuarioId: string;    // Autor del mensaje
  contenido: string;
  fecha: string;
  adjuntos?: string[]; // URLs de archivos adjuntos
  editado?: boolean; // Indica si el mensaje ha sido editado
  timestamp: string; // Timestamp en milisegundos
  reacciones?: Reaccion[]; // Reacciones al mensaje
}
