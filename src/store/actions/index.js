// Coloque aqui suas actions
export const NEW_ACTION_USER = 'NEW_ACTION_USER';
export const NEW_ACTION_WALLET = 'NEW_ACTION_WALLET';

export function newActionUser(state) {
  return {
    type: NEW_ACTION_USER,
    payload: state,
  };
}

export function newActionWallet(state) {
  return {
    type: NEW_ACTION_WALLET,
    payload: state,
  };
}
