import { LOGIN_FORM_SUBMIT } from './actionTypes';

const loginAction = (email) => ({
  type: LOGIN_FORM_SUBMIT,
  payload: email,
});

export default loginAction;
