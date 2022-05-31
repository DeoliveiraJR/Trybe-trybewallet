// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const GET_DATA_WALLET = 'GET_DATA_WALLET';

export function getEmailAndLogin(email) {
  return {
    type: LOGIN_USER,
    email,
  };
}

export function getDatarWallet(dataWallet) {
  return {
    type: GET_DATA_WALLET,
    payload: dataWallet,
  };
}
