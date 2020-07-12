import React, { useState, useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';

import { sessionsService } from '../../services/api';
import User from '../../interfaces/user';

import { Nav } from './styles';

const Navbar: React.FC = () => {
  const [greet, setGreet] = useState<string>('');

  useEffect(() => {
    const { name } = sessionsService.getUserData();
    const [firstName] = name.split(' ');

    setGreet(`Olá ${firstName}, seja bem vindo(a)`);
  }, []);

  return (
    <Nav>
      <span>{greet}</span>

      <FiLogOut />
    </Nav>
  );
};

export default Navbar;
