import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import WalletForm from '../../components/WalletForm';

describe('Testando o componente WalletForm', () => {
  it('Teste se todos os componentes são renderizados', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const valor = screen.getByLabelText('Valor:');
    const descrição = screen.getByLabelText('Descrição:');
    const moeda = screen.getByLabelText('Moeda:');
    const método = screen.getByLabelText('Método de pagamento:');
    const categoria = screen.getByLabelText('Categoria de despesa:');
    const button = screen.getByRole('button', { name: 'Adicionar despesa' });

    expect(valor).toBeInTheDocument();
    expect(descrição).toBeInTheDocument();
    expect(moeda).toBeInTheDocument();
    expect(método).toBeInTheDocument();
    expect(categoria).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Teste se o formulário está devidamente funcional', async () => {
    renderWithRouterAndRedux(<WalletForm />);

    const valor = screen.getByLabelText('Valor:');
    const descrição = screen.getByLabelText('Descrição:');
    const moeda = screen.getByLabelText('Moeda:');
    const método = screen.getByLabelText('Método de pagamento:');
    const categoria = screen.getByLabelText('Categoria de despesa:');

    userEvent.type(valor, '5');
    userEvent.type(descrição, 'passagem');
    await waitFor(() => {
      expect(moeda).toHaveValue('USD');
    });
    userEvent.selectOptions(moeda, 'USD');
    userEvent.selectOptions(método, 'Dinheiro');
    userEvent.selectOptions(categoria, 'Transporte');

    expect(valor.value).toBe('5');
    expect(descrição.value).toBe('passagem');
    expect(moeda.value).toBe('USD');
    expect(método.value).toBe('Dinheiro');
    expect(categoria.value).toBe('Transporte');
  });
});
