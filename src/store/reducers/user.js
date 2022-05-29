import { NEW_ACTION_USER } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_ACTION_USER:
    return { ...state, ...action.payload };
  default:
    return state;
  }
}

export default user;
