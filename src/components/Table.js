import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAction } from '../redux/actions/index';

const formatValue = (value) => (
  Math.round(value * 100) / 100).toFixed(2);

class Table extends Component {
  deleteBTN = (e) => {
    const { dispatch } = this.props;
    dispatch(deleteAction(e));
  };

  render() {
    const { wallet: { expenses } } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(({
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates,
            }) => (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ formatValue(value) }</td>
                <td>{ exchangeRates[currency].name }</td>
                <td>{ formatValue(exchangeRates[currency].ask) }</td>
                <td>{ formatValue(exchangeRates[currency].ask * value) }</td>
                <td>Real Brasileiro</td>
                <td>
                  <button
                    type="button"
                    onClick={ () => this.deleteBTN(id) }
                    data-testid="delete-btn"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.shape([]),
  }),
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Table);
