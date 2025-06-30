export interface LoginResponse {
    token: string; // El JWT recibido
    username: string; // El username del usuario loggeado (puede venir del token también)
    // Otros datos útiles que ms-auth pueda devolver
  }