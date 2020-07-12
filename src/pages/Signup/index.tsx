import React, { useRef } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router';

import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { hash } from 'bcryptjs';
import { toast } from 'react-toastify';
import { uuid } from 'uuidv4';

import { usersService } from '../../services/api';
import { Content, SignupBox } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const hisory = useHistory();

  const handleSubmit: SubmitHandler<SignupForm> = async (data) => {
    const { name, email, password } = data;
    const encryptedPassword = await hash(password, 8);
    const user = {
      id: uuid(),
      name,
      email,
      password: encryptedPassword,
    };

    usersService.create(user);

    formRef.current?.reset();

    toast.success('Você foi cadastrado com sucesso!', {
      onClose: () => hisory.push(`${process.env.PUBLIC_URL}/`),
    });
  };

  const handleValidatePassword = () => {
    const formData = formRef.current?.getData() as SignupForm;

    if (formData?.password !== formData?.confirmPassword) {
      formRef.current
        ?.getFieldRef('confirmPassword')
        .setCustomValidity('Confirme a senha corretamente');
    } else {
      formRef.current?.getFieldRef('confirmPassword').setCustomValidity('');
    }
  };

  return (
    <Content>
      <SignupBox>
        <Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
          <h1>Cadastre-se</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" required />
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
            onChange={handleValidatePassword}
            required
          />
          <Input
            name="confirmPassword"
            icon={FiLock}
            type="password"
            placeholder="Confirmar senha"
            onChange={handleValidatePassword}
            required
          />
          <Button type="submit">Salvar</Button>
        </Form>
      </SignupBox>
    </Content>
  );
};

export default Signup;
