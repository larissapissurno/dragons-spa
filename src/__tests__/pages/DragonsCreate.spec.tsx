import React from 'react';
import { AxiosRequestConfig } from 'axios';

import { render, fireEvent } from '@testing-library/react';

import api, { sessionsService } from '../../services/api';
import DragonsCreate from '../../pages/Dragons/DragonsCreate';
import User from '../../interfaces/user';

describe('Create Dragon Page', () => {
  let spy: jest.SpyInstance<
    Promise<unknown>,
    [string, any?, (AxiosRequestConfig | undefined)?]
  >;

  beforeEach(() => {
    const user: User = {
      id: '1',
      email: 'mail@mail.com',
      name: 'User',
      password: '123',
    };
    jest.spyOn(sessionsService, 'getUserData').mockReturnValue(user);

    spy = jest
      .spyOn(api, 'post')
      .mockImplementation(() => Promise.resolve(true));

    window.location.assign = jest.fn();
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should be able to save', async () => {
    const { getByPlaceholderText, getByText } = render(<DragonsCreate />);
    const postSpy = jest.spyOn(api, 'post').mockResolvedValue(true);

    const nameField = getByPlaceholderText('Nome');
    const typeField = getByPlaceholderText('Tipo');
    const saveButton = getByText('Salvar');
    const dragon = { name: 'Smaug', type: 'red' };

    fireEvent.change(nameField, { target: { value: dragon.name } });
    fireEvent.change(typeField, { target: { value: dragon.type } });
    fireEvent.click(saveButton);

    expect(postSpy).toHaveBeenCalledWith('dragon', dragon);
  });

  it('should not be able to save with invalid form', async () => {
    const { getByPlaceholderText, getByText } = render(<DragonsCreate />);
    const postSpy = jest.spyOn(api, 'post').mockResolvedValue(true);

    const nameField = getByPlaceholderText('Nome');
    const typeField = getByPlaceholderText('Tipo');
    const saveButton = getByText('Salvar');

    fireEvent.change(nameField, { target: { value: '' } });
    fireEvent.change(typeField, { target: { value: '' } });
    fireEvent.click(saveButton);

    expect(postSpy).not.toHaveBeenCalled();
  });
});
