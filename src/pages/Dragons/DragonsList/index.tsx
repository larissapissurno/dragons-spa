import React, { useEffect, useState } from 'react';
import { FiPlus, FiEdit, FiTrash } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import Swal from 'sweetalert2';

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

  const handleUpdateDragon = (id: string) => {
    history.push(`${process.env.PUBLIC_URL}/dragons/${id}`);
  };

  const handleDeleteDragon = ({ id, name }: Dragon) => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: `O dragão ${name} será removido e pode nunca mais retornar! 🐲😟`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Remover',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        api.delete(`dragon/${id}`).then(() => {
          toast.dark(`${name} foi removido. 🐉`);
          const newDragonList = dragons.filter((dragon) => dragon.id !== id);
          setDragons(newDragonList);
        });
      }
    });
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
              <th></th>
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
                  <td>
                    <FiEdit onClick={() => handleUpdateDragon(dragon.id)} />
                    <FiTrash onClick={() => handleDeleteDragon(dragon)} />
                  </td>
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
