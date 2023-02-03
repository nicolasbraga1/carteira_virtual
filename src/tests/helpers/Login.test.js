import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';

describe('Testando a página de Login', () => {
  it('Testando se todos os elementos são renderizados', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByLabelText('Email');
    const senha = screen.getByLabelText('Senha');
    const button = screen.getByRole('button');

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Testando se ao fazer Login é redirecinado para a página carteira', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByLabelText('Email');
    const senha = screen.getByLabelText('Senha');
    const button = screen.getByRole('button');

    userEvent.type(email, 'bla@bla.com');
    expect(email.value).toBe('bla@bla.com');

    expect(button.disabled).toBeTruthy();

    userEvent.type(senha, 'blabla');
    expect(senha.value).toBe('blabla');

    expect(button.disabled).not.toBeTruthy();

    userEvent.click(button);
    expect(screen.getByTestId('total-field')).toBeInTheDocument();
  });
});
