import * as types from '../constants/ActionTypes';

export const filmsAreFetching = (isLoading) => {
  return {
    type: types.FILMS_ARE_FETCHING,
    isLoading
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
      .then(response => {
        response.ok ?
          dispatch(filmsAreFetching(false)) :
          throw Error(response.statusText);

        return response;
      })
      .then(response => response.json())
      .then(films => dispatch(fetchFilmsSuccess(films)))
      .catch(() => dispatch(fetchFilmsError(true)));
  };
};
