// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_USER } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  login: false,
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state,
      login: !action.login,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
