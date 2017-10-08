import { combineReducers } from 'redux';
import { fetchFilmsError, fetchFilmsSuccess, filmsAreFetching } from './filmsReducers';

const rootReducer = combineReducers({
  fetchFilmsError,
  fetchFilmsSuccess,
  filmsAreFetching
});

export default rootReducer;
