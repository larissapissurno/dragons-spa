import axios from 'axios';
import UsersService from './UsersService';
import SessionsService from './SessionsService';

const api = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/',
});

export const usersService = new UsersService();
export const sessionsService = new SessionsService();

export default api;
