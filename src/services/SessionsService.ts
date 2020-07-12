import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import { usersService } from './api';
import authConfig from '../config/auth';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default class SessionsService {
  create = async (email: string, password: string) => {
    const users = usersService.get();

    const user = users.find((user: User) => user.email);

    if (!user) {
      return;
    }

    if (!(await compare(password, user.password))) {
      return;
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    localStorage.setItem(
      '@dragonsSpa:userSession',
      JSON.stringify({ user, token }),
    );

    return true;
  };

  delete = () => true;
}
