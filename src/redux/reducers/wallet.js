import { WALLET_FORM_SUBMIT } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_FORM_SUBMIT:
    return {
      ...state,
    };
  default:
    return state;
  }
}

export default walletReducer;
