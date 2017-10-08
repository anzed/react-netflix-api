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
