// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const GET_DATA_WALLET = 'GET_DATA_WALLET';
export const GET_EXPENSES = 'GET_EXPENSES';

export function getEmailAndLogin(email) {
  return {
    type: LOGIN_USER,
    email,
  };
}

function getDataWallet(currencies) {
  return {
    type: GET_DATA_WALLET,
    currencies: [...currencies],
  };
}

function getExpenses(objExpense) {
  return {
    type: GET_EXPENSES,
    expenses: [...objExpense],
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

export function fetchCotacoes(expenses) {
  // console.log(expenses);
  const {
    countId,
    value,
    description,
    categoria,
    metodo,
    moeda,
  } = expenses;

  const URL = 'https://economia.awesomeapi.com.br/json/all';

  return async (dispatch) => {
    try {
      const resolve = await fetch(URL);
      const data = await resolve.json();
      delete data.USDT;
      // console.log(data);

      const objExpense = [{
        countId,
        value,
        description,
        categoria,
        metodo,
        moeda,
        exchangeRates: data,
      }];
      // console.log(objExpense);
      // const subtotal = objExpense.filter((element) => console.log(element));

      dispatch(getExpenses(objExpense));
    } catch (error) {
      console.log(error);
    }
  };
}
