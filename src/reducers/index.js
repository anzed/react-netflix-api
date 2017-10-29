import { combineReducers } from 'redux';
import {
  fetchFilmsError,
  fetchFilmsSuccess,
  filmsAreFetching,
  changeSearchBy,
  selectFilm,
  sortByRelease
} from './filmsReducers';

const rootReducer = combineReducers({
  fetchFilmsError,
  fetchFilmsSuccess,
  filmsAreFetching,
  changeSearchBy,
  selectFilm,
  sortByRelease
});

export default rootReducer;
