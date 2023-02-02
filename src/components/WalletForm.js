import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, fetchExpenses } from '../redux/actions';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class WalletForm extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPI());
  }

  preventSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchExpenses({ ...this.state }));
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState((current) => ({
      ...current,
      [id]: value,
    }));
  };

  render() {
    const { value, description } = this.state;
    const { wallet: { currencies } } = this.props;

    return (
      <form onSubmit={ this.preventSubmit }>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="number"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {currencies.length > 0 && currencies.map((currency, i) => (
              <option key={ `${currency}-${i}` }>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria de despesa:
          <select
            id="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          <button type="submit">
            Adicionar despesa
          </button>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  wallet: PropTypes.shape({
    currencies: PropTypes.shape([PropTypes.string]),
  }),
}.isRequired;

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(WalletForm);
