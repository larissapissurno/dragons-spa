import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { sessionsService } from '../../services/api';

import { Nav } from './styles';

const Navbar: React.FC = () => {
  const history = useHistory();
  const [greet, setGreet] = useState<string>('');

  useEffect(() => {
    const { name } = sessionsService.getUserData();
    const [firstName] = name.split(' ');

    setGreet(`Olá ${firstName}, seja bem vindo (a)!`);
  }, []);

  const handleLogout = () => {
    sessionsService.delete();
    history.push(`${process.env.PUBLIC_URL}/login`);
  };

  return (
    <Nav>
      <span>{greet}</span>

      <FiLogOut title="Sair" onClick={handleLogout} />
    </Nav>
  );
};

export default Navbar;
