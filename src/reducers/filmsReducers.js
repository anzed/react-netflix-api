import * as types from '../constants/ActionTypes';

export const fetchFilmsError = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_FILMS_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
};

export const fetchFilmsSuccess = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_FILMS_SUCCESS:
      return action.films;
    default:
      return state;
  }
};

export const filmsAreFetching = (state = false, action) => {
  switch (action.type) {
    case types.FILMS_ARE_FETCHING:
      return action.areFetching;
    default:
      return state;
  }
};

export const changeSearchBy = (state = 'title', action) => {
  switch (action.type) {
    case types.CHANGE_SEARCH_BY:
      return action.searchBy;
    default:
      return state;
  }
};

export const selectFilm = (state = {}, action) => {
  switch (action.type) {
    case types.SELECT_FILM:
      return action.selectedFilm;
    default:
      return state;
  }
};

export const sortByRelease = (state = true, action) => {
  switch (action.type) {
    case types.SORT_BY_RELEASE:
      return action.byRelease;
    default:
      return state;
  }
};
