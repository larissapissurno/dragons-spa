import React, { useRef, useState, FormEvent } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Content, LoginBox } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
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
