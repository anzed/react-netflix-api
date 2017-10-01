import * as types from '../constants/ActionTypes';

const initialState = {
  films: [],
  areFetching: false,
  hasErrored: false
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case types.FILMS_ARE_FETCHING:
      return action.areFetching;

    case types.FETCH_FILMS_SUCCESS:
      return action.films;

    case types.FETCH_FILMS_ERROR:
      return action.hasErrored;

    default:
      return state;
  }
};

export default films;
