import React from 'react';
import { AxiosRequestConfig } from 'axios';

import { render, fireEvent } from '@testing-library/react';

import api, { sessionsService } from '../../services/api';
import DragonsUpdate from '../../pages/Dragons/DragonsUpdate';
import User from '../../interfaces/user';

describe('Update Dragon Page', () => {
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
    jest
      .spyOn(api, 'get')
      .mockResolvedValue({ id: '1', name: 'Ryan', type: 'black' });

    spy = jest
      .spyOn(api, 'put')
      .mockImplementation(() => Promise.resolve(true));

    window.location.assign = jest.fn();
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should be able to update', async () => {
    const match = {
      params: { id: '1' },
    };
    const { getByPlaceholderText, getByText } = render(
      <DragonsUpdate match={match} />,
    );

    const nameField = getByPlaceholderText('Nome');
    const typeField = getByPlaceholderText('Tipo');
    const saveButton = getByText('Salvar');
    const updateDragon = { id: '1', name: 'Ryan', type: 'black' };

    fireEvent.change(nameField, { target: { value: updateDragon.name } });
    fireEvent.change(typeField, { target: { value: updateDragon.type } });
    fireEvent.click(saveButton);

    expect(spy).toHaveBeenCalled();
  });

  it('should not be able to save with invalid form', async () => {
    const match = {
      params: { id: 1 },
    };
    const { getByPlaceholderText, getByText } = render(
      <DragonsUpdate match={match} />,
    );

    const nameField = getByPlaceholderText('Nome');
    const typeField = getByPlaceholderText('Tipo');
    const saveButton = getByText('Salvar');

    fireEvent.change(nameField, { target: { value: '' } });
    fireEvent.change(typeField, { target: { value: '' } });
    fireEvent.click(saveButton);

    expect(spy).not.toHaveBeenCalled();
  });
});
