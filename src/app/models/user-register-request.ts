export interface UserRegisterRequest {
    username: string;
    password: string;
    email: string;
    description?: string; // Campo opcional
  }