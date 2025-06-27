import { Mensaje } from "./mensaje.model";

export interface Conversacion {
    id: string;
    usuarios: string[]; // IDs de usuarios en la conversación
    mensajes: Mensaje[]; // Mensajes en la conversación
}