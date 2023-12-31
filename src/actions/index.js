// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const GET_DATA_WALLET = 'GET_DATA_WALLET';
export const GET_EXPENSES = 'GET_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export function getEmailAndLogin(email) {
  return {
    type: LOGIN_USER,
    email,
  };
}

export function getDataWallet(currencies) {
  return {
    type: GET_DATA_WALLET,
    currencies: [...currencies],
  };
}

function getExpenses(id, expenses, data) {
  return {
    type: GET_EXPENSES,
    payload: {
      id,
      ...expenses,
      exchangeRates: data,
    },
  };
}

export function deleteExpenses(id) {
  // console.log(id);
  return {
    type: DELETE_EXPENSES,
    id,
  };
}

export function fetchDataWallet() {
  const URL = 'https://economia.awesomeapi.com.br/json/all';

  return async (dispatch) => {
    try {
      const resolve = await fetch(URL);
      const data = await resolve.json();
      const currencies = Object.keys(data).filter((code) => code !== 'USDT');
      // console.log(currencies);
      dispatch(getDataWallet(currencies));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchCotacoes(id, expenses) {
  // console.log(expenses);
  /* const {
    value,
    description,
    tag,
    method,
    currency,
  } = expenses; */

  const URL = 'https://economia.awesomeapi.com.br/json/all';

  return async (dispatch) => {
    try {
      const resolve = await fetch(URL);
      const data = await resolve.json();
      delete data.USDT;
      // console.log(data);

      /* const objExpense = [{
        value,
        description,
        tag,
        method,
        currency,
        exchangeRates: data,
      }]; */
      // console.log(objExpense);
      // const subtotal = objExpense.filter((element) => console.log(element));

      dispatch(getExpenses(id, expenses, data));
    } catch (error) {
      console.log(error);
    }
  };
}
