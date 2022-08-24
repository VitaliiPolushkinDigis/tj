import axios from 'axios';
import { LoginDto, RegisterDto, AuthResponse } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:7777',
});

export const UserApi = {
  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    const { data } = await instance.post<RegisterDto, { data: AuthResponse }>('/auth/register', registerDto);
    return data;
  },
  async login(loginDto: LoginDto) {
    const { data } = await instance.post<LoginDto, { data: AuthResponse }>('/auth/login', loginDto);
    return data;
  },
  async getMe(token: string) {
    const { data } = await instance.get<AuthResponse>('/user/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};
