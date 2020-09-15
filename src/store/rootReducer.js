import { combineReducers } from 'redux';
import alertReducer from './reducers/alertReducer';
import productsReducer from './reducers/productsReducer';

export default combineReducers({
  alertReducer,
  productsReducer
});
