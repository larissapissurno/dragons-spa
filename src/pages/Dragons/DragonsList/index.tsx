import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';

import { Container } from '../../../styles/global';
import Navbar from '../../../components/Navbar';
import Button from '../../../components/Button';
import { TableHead, TableBody, Header } from './styles';

interface Dragon {
  id: string;
  createdAt: string;
  name: string;
  type: string;
}

const DragonsList: React.FC = () => {
  const history = useHistory();
  const [dragons, setDragons] = useState<Dragon[]>([]);

  useEffect(() => {
    api.get<Dragon[]>('dragon').then((response) => {
      setDragons(response.data);
    });
  }, []);

  const handleCreateDragon = () => {
    history.push(`${process.env.PUBLIC_URL}/dragons/create`);
  };

  return (
    <>
      <Navbar />
      <Header>
        <h1>Lista de Dragões</h1>
        <Button title="Novo Dragão" onClick={handleCreateDragon}>
          <FiPlus />
        </Button>
      </Header>
      <Container>
        <TableHead>
          <thead>
            <tr>
              <th>Data de criação</th>
              <th>Nome</th>
              <th>Tipo</th>
            </tr>
          </thead>
        </TableHead>
        <TableBody>
          <table>
            <tbody>
              {dragons.map((dragon) => (
                <tr key={dragon.id}>
                  <td>{new Date(dragon.createdAt).toLocaleDateString()}</td>
                  <td>{dragon.name}</td>
                  <td>{dragon.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableBody>
      </Container>
    </>
  );
};

export default DragonsList;
