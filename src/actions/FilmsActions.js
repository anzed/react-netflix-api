import * as types from '../constants/ActionTypes';

export const filmsAreFetching = (areFetching) => {
  return {
    type: types.FILMS_ARE_FETCHING,
    areFetching
  };
};

export const fetchFilmsSuccess = (films) => {
  return {
    type: types.FETCH_FILMS_SUCCESS,
    films
  };
};

export const fetchFilmsError = (hasErrored) => {
  return {
    type: types.FETCH_FILMS_ERROR,
    hasErrored
  };
};

export const fetchFilms = (url) => {
  return (dispatch) => {
    dispatch(filmsAreFetching(true));

    fetch(url)
      .then((response) => {
        if (response.ok) {
          dispatch(filmsAreFetching(false));
        }

        return response;
      })
      .then(response => response.json())
      .then(films => dispatch(fetchFilmsSuccess(films)))
      .catch(() => dispatch(fetchFilmsError(true)));
  };
};
