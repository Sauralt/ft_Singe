// Ajoute vos types globaux ici

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
