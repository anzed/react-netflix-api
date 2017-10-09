import { combineReducers } from 'redux';
import { fetchFilmsError, fetchFilmsSuccess, filmsAreFetching, changeSearchBy } from './filmsReducers';

const rootReducer = combineReducers({
  fetchFilmsError,
  fetchFilmsSuccess,
  filmsAreFetching,
  changeSearchBy
});

export default rootReducer;
