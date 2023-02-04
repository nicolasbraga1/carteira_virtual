import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const formatValue = (value) => (
  Math.round(value * 100) / 100).toFixed(2);

const sumTotal = (expenses) => formatValue(
  expenses.length > 0
    ? expenses.reduce((acc, { currency, exchangeRates, value }) => {
      const exchangedValue = parseFloat(exchangeRates[currency].ask) * value;
      const sum = acc + exchangedValue;
      return sum;
    }, 0)
    : 0,
);

class Header extends Component {
  render() {
    const { user: { email }, wallet: { expenses } } = this.props;
    return (
      <header>
        <div>
          <span data-testid="email-field">
            {email}
          </span>
        </div>
        <div>
          Total:
          <span data-testid="total-field">
            {sumTotal(expenses)}
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => state;

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  wallet: PropTypes.shape({
    expenses: PropTypes.shape([]),
  }),
}.isRequired;

export default connect(mapStateToProps)(Header);
