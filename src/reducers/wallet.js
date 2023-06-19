// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_DATA_WALLET, GET_EXPENSES, DELETE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { expenses } = state;
  console.log(expenses);
  console.log(action.id);
  switch (action.type) {
  case GET_DATA_WALLET:
    return { ...state, currencies: [...action.currencies] };
  case GET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
}

export default wallet;
