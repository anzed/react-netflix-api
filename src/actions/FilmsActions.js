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
      .then(response => response.results)
      .then(films => dispatch(fetchFilmsSuccess(films)))
      .catch(() => {
        dispatch(filmsAreFetching(false));
        dispatch(fetchFilmsError(true));
        dispatch(fetchFilmsSuccess([]));
      });
  }
);

export const changeSearchBy = searchBy => (
  {
    type: types.CHANGE_SEARCH_BY,
    searchBy
  }
);

export const selectFilm = selectedFilm => (
  {
    type: types.SELECT_FILM,
    selectedFilm
  }
);

export const fetchFilmDetails = filmId => (
  (dispatch) => {
    dispatch(filmsAreFetching(true));

    fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=16b7cd81c65bb2861400b8c44312045d`)
      .then((response) => {
        if (response.ok) {
          dispatch(filmsAreFetching(false));
        } else {
          throw new Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(film => dispatch(selectFilm(film)))
      .catch(() => {
        dispatch(filmsAreFetching(false));
        dispatch(fetchFilmsError(true));
      });
  }
);
