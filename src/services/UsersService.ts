interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default class UsersService {
  get = () => {
    const storagedUsers = localStorage.getItem('@dragonsSpa:users');
    return storagedUsers ? JSON.parse(storagedUsers) : [];
  };

  create = (user: User) => {
    const users = this.get();

    users.push(user);

    localStorage.setItem('@dragonsSpa:users', JSON.stringify(users));
  };
}
