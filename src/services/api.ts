import axios, { AxiosRequestConfig } from 'axios';

import UsersService from './UsersService';
import SessionsService from './SessionsService';

const api = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/',
});

export const usersService = new UsersService();
export const sessionsService = new SessionsService();

api.interceptors.request.use((config) => {
  if (!config.url?.endsWith('login') || !config.url?.endsWith('signup')) {
    if (!sessionsService.hasActiveSession()) {
      window.location.href = `${process.env.PUBLIC_URL}/login`;
    }
  }

  return config;
});

export default api;
