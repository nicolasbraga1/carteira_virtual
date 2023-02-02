import {
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_FAILED } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  error: '',
  isLoading: false,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_START:
    return {
      ...state,
      currencies: [],
      error: '',
      isLoading: true,
    };
  case REQUEST_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
      error: '',
      isLoading: false,
    };
  case REQUEST_FAILED:
    return {
      ...state,
      currencies: [],
      error: action.payload,
      isLoading: false,
    };
  default:
    return state;
  }
}

export default walletReducer;
