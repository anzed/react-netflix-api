import * as types from '../constants/ActionTypes';

export const filmsAreFetching = areFetching => (
  {
    type: types.FILMS_ARE_FETCHING,
    areFetching
  }
);

export const fetchFilmsSuccess = films => (
  {
    type: types.FETCH_FILMS_SUCCESS,
    films
  }
);

export const fetchFilmsError = hasErrored => (
  {
    type: types.FETCH_FILMS_ERROR,
    hasErrored
  }
);

export const fetchFilms = url => (
  (dispatch) => {
    dispatch(filmsAreFetching(true));

    fetch(url)
      .then((response) => {
        if (response.ok) {
          dispatch(filmsAreFetching(false));
        } else {
          throw new Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(films => (
        Array.isArray(films) ?
          films :
          [films]
      ))
      .then(films => dispatch(fetchFilmsSuccess(films)))
      .catch(() => dispatch(fetchFilmsError(true)));
  }
);
