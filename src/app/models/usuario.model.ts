export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  avatar?: string;
  fechaRegistro: string; // ISO
  servidores: string[];  // IDs de servidores donde participa
  amigos: string[];      // IDs de otros usuarios
}
