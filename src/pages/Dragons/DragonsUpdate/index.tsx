import React, { useRef, useEffect, useState } from 'react';
import { FiCornerUpLeft } from 'react-icons/fi';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../../../services/api';

import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { Container } from '../../../styles/global';
import Navbar from '../../../components/Navbar';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Header, ContentForm, ButtonSave } from './styles';

interface Dragon {
  id: string;
  name: string;
  type: string;
  histories: string[];
}

interface RouterProps {
  match: any;
}

const DragonsUpdate: React.FC<RouterProps> = ({ match }) => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [dragon, setDragon] = useState<Dragon>();

  useEffect(() => {
    const { id } = match.params;
    api.get<Dragon>(`dragon/${id}`).then(({ data }) => {
      setDragon(data);
      formRef.current?.setData(data);
    });
  }, []);

  const handleClickGoBack = () => {
    history.goBack();
  };

  const handleSubmit: SubmitHandler<Dragon> = (data) => {
    api.put('dragon', data).then(() => {
      formRef.current?.reset();
      toast.success('🐉 Dragão editado com sucesso!', {
        onClose: () => history.push(`${process.env.PUBLIC_URL}/dragons`),
      });
    });
  };

  return (
    <>
      <Navbar />
      <Header>
        <h1>{dragon?.name}</h1>
        <Button title="Voltar" onClick={handleClickGoBack}>
          <FiCornerUpLeft />
        </Button>
      </Header>
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ContentForm>
            <Input
              name="name"
              label="Nome"
              icon={undefined}
              placeholder="Nome"
              required
            />
            <Input
              name="type"
              label="Tipo"
              icon={undefined}
              placeholder="Tipo"
              required
            />
          </ContentForm>

          <ButtonSave type="submit">Salvar</ButtonSave>
        </Form>
      </Container>
    </>
  );
};

export default DragonsUpdate;
