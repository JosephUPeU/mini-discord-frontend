export interface UserResponse {
    id: number;
    username: string;
    email: string;
    description: string;
    createdAt: string; // O Date si la conviertes en el frontend
    updatedAt: string; // O Date
  }