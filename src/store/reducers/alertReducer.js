import { HIDE_ALERT, SHOW_ALERT } from '../constants';

const initialState = {
  alertType: '',
  show: false,
  text: ''
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        show: true,
        text: action.text,
        alertType: action.alertType
      };
    case HIDE_ALERT:
      return {
        ...state,
        show: false,
        text: initialState.text,
        alertType: initialState.alertType
      };
    default:
      return state;
  }
}