import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import { Container } from '../../../styles/global';
import Navbar from '../../../components/Navbar';
import { TableHead, TableBody } from './styles';

interface Dragon {
  id: string;
  createdAt: string;
  name: string;
  type: string;
}

const DragonsList: React.FC = () => {
  const [dragons, setDragons] = useState<Dragon[]>([]);

  useEffect(() => {
    api.get<Dragon[]>('dragon').then((response) => {
      setDragons(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      {/* <h1>Lista de Dragões</h1> */}
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
