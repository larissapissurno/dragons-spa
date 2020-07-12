import User from '../interfaces/user';
import { toast } from 'react-toastify';

export default class UsersService {
  get = () => {
    const storagedUsers = localStorage.getItem('@dragonsSpa:users');
    return storagedUsers ? JSON.parse(storagedUsers) : [];
  };

  create = (user: User) => {
    const users = this.get();

    const userWithEmail = users.find((usr: User) => usr.email === user.email);

    if (userWithEmail) {
      toast.dark('Já existe um usuário cadastrado com este email.');
      return;
    }

    users.push(user);

    localStorage.setItem('@dragonsSpa:users', JSON.stringify(users));
  };
}
