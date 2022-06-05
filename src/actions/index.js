// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const GET_DATA_WALLET = 'GET_DATA_WALLET';

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
    expenses: [],
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
