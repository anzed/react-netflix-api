import { combineReducers } from 'redux';
import {
  fetchFilmsError,
  fetchFilmsSuccess,
  filmsAreFetching,
  changeSearchBy,
  selectFilm
} from './filmsReducers';

const rootReducer = combineReducers({
  fetchFilmsError,
  fetchFilmsSuccess,
  filmsAreFetching,
  changeSearchBy,
  selectFilm
});

export default rootReducer;
