import React, { useState, FormEvent } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Content, LoginBox } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <Content>
      <LoginBox>
        <form>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          {/* <a href="forgot">Esqueci minha senha</a> */}
        </form>

        <a href="/">
          <FiLogIn />
          Criar conta
        </a>
      </LoginBox>
    </Content>
  );
};

export default Login;
