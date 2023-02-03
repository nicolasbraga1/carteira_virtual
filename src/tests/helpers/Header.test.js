import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './renderWith';
import Header from '../../components/Header';

describe('Testa o componente Header', () => {
  it('Testa se o componente Header renderiza o email do usuário', () => {
    const initialState = {
      user: {
        email: 'bla@bla.com',
      },
    };

    renderWithRouterAndRedux(<Header />, { initialState });

    const email = screen.getByText(new RegExp(initialState.user.email, 'i'));

    expect(email).toBeInTheDocument();
  });

  it('Testa se o componente Header renderiza o elemento com o total', () => {
    renderWithRouterAndRedux(<Header />);

    const total = screen.getByTestId('total-field');
    expect(total).toBeInTheDocument();
  });
});
