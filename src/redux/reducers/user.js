import { LOGIN_FORM_SUBMIT } from '../actions/actionTypes';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_FORM_SUBMIT:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default userReducer;
