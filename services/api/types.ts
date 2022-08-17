export type RegisterDto = {
  fullName: string;
  email: string;
  passwords: string;
};
export type LoginDto = {
  email: string;
  passwords: string;
};

export type AuthResponse = {
  createdAt: string;
  email: string;
  fullName: string;
  id: number;
  token: string;
  updatedAt: string;
};
