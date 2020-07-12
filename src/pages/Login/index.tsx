import React, { useRef, useEffect } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { sessionsService } from '../../services/api';
import { Content, LoginBox } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const hisory = useHistory();
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    if (sessionsService.hasActiveSession()) {
      hisory.push(`${process.env.PUBLIC_URL}/dragons`);
    }
  }, []);

  const handleSubmit: SubmitHandler<LoginForm> = ({ email, password }) => {
    sessionsService.create(email, password).then((response) => {
      if (!response) {
        toast.dark('Email e/ou senha incorretos.');
        return;
      }

      hisory.push(`${process.env.PUBLIC_URL}/dragons`);
    });
  };
  return (
    <Content>
      <LoginBox>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input
            name="email"
            icon={FiMail}
            type="email"
            placeholder="E-mail"
            required
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            required
          />

          <Button type="submit">Entrar</Button>
        </Form>

        <Link to={`${process.env.PUBLIC_URL}/signup`}>
          <FiLogIn />
          Criar conta
        </Link>
      </LoginBox>
    </Content>
  );
};

export default Login;
