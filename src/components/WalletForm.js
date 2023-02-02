import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPI());
  }

  preventSubmit = (event) => {
    event.preventDefault(wallet);
  };

  render() {
    const { wallet: { currencies } } = this.props;

    return (
      <form onSubmit={ this.preventSubmit }>
        <label htmlFor="value">
          Valor:
          <input
            name="value"
            type="text"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            name="description"
            type="text"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currencies">
          Moeda:
          <select
            name="currencies"
            data-testid="currency-input"
          >
            {currencies.length > 0 && currencies.map((currency, i) => (
              <option key={ `${currency}-${i}` }>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select
            name="payment"
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Categoria de despesa:
          <select
            name="category"
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
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
