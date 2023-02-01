import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loginAction from '../redux/actions/index';

class Login extends React.Component {
  state = {
    inputEmail: '',
    inputPassword: '',
    buttonDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      { [name]: value },
      this.loginBTN,
    );
  };

  loginBTN = () => {
    const { inputEmail, inputPassword } = this.state;
    const min = 6;
    const regexEmail = /\S+@\S+\.\S+/;
    this.setState({
      buttonDisabled: !(regexEmail.test(inputEmail) && inputPassword.length >= min),
    });
  };

  redirectPage = () => {
    const { inputEmail } = this.state;
    const { history, dispatch } = this.props;
    dispatch(loginAction(inputEmail));
    history.push('/carteira');
  };

  render() {
    const { buttonDisabled, inputPassword, inputEmail } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            name="inputEmail"
            placeholder="Email"
            value={ inputEmail }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
          <input
            type="password"
            name="inputPassword"
            placeholder="Senha"
            value={ inputPassword }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <button
            type="button"
            disabled={ buttonDisabled }
            onClick={ this.redirectPage }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Login);
