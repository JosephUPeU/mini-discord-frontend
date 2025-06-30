// 📥 LoginRequest: para iniciar sesión
export interface LoginRequest {
  username: string;
  password: string;
}

// 📤 LoginResponse: respuesta del login (token y userId)
export interface LoginResponse {
  jwt: string;
  username: string;
}

// 📥 RegisterRequest: para registrar un nuevo usuario
export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

// 📤 UserResponse: respuesta al registrar o consultar usuario
export interface UserResponse {
  id: number;
  username: string;
  email: string;
  description?: string;
}

// 📤 AuthUserResponse: respuesta al validar el JWT (GET /auth/validate)
export interface AuthUserResponse {
  id: number;
  username: string;
  email: string;
}
