import {
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
  ADD_EXPENSE,
  DELETE_EXPENSE } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: ['USD'],
  expenses: [],
  error: '',
  isLoading: false,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses, {
          id: state.expenses.length,
          ...action.payload,
        },
      ],
    };
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
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  default:
    return state;
  }
}

export default walletReducer;
