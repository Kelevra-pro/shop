import { HIDE_ALERT, SHOW_ALERT } from '../constants';

export const showAlert = (text, alertType = 'secondary') => {
  return { type: SHOW_ALERT, text, alertType };
};

export const hideAlert = () => {
  return { type: HIDE_ALERT };
};
