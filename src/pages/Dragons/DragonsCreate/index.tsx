import React, { useRef } from 'react';
import { FiCornerUpLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { Container } from '../../../styles/global';
import Navbar from '../../../components/Navbar';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Header, ContentForm, ButtonSave } from './styles';

interface DragonForm {
  name: string;
  type: string;
  histories: string[];
}

const DragonsCreate: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleClickGoBack = () => {
    history.goBack();
  };

  const handleSubmit: SubmitHandler<DragonForm> = (data) => {
    if (!data.name || !data.type) {
      return;
    }

    api.post('dragon', data).then(() => {
      formRef.current?.reset();
      toast.success('🐉 Dragão adicionado com sucesso!', {
        onClose: () => history.push(`${process.env.PUBLIC_URL}/dragons`),
      });
    });
  };

  return (
    <>
      <Navbar />
      <Header>
        <h1>Novo Dragão</h1>
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

export default DragonsCreate;
