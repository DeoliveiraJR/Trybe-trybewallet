import { GET_DATA_WALLET, GET_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_DATA_WALLET:
    return { ...state, currencies: [...action.currencies] };
  case GET_EXPENSES:
    return { ...state, expenses: [...state.expenses, ...action.expenses] };
  default:
    return state;
  }
}

export default wallet;
