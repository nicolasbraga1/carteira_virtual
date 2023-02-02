import {
  LOGIN_FORM_SUBMIT,
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_FAILED } from './actionTypes';

export const loginAction = (email) => ({
  type: LOGIN_FORM_SUBMIT,
  payload: email,
});

const startAction = () => ({
  type: REQUEST_START,
});

const successAction = (data) => ({
  type: REQUEST_SUCCESS,
  payload: data,
});

const failedAction = (error) => ({
  type: REQUEST_FAILED,
  payload: error,
});

export function fetchAPI() {
  return (dispatch) => {
    dispatch(startAction());
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        const keys = Object.keys(data).filter((key) => key !== 'USDT');
        dispatch(successAction(keys));
      })
      .catch((error) => dispatch(failedAction(error)));
  };
}
