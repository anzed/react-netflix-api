/* eslint no-undef:0 */
import * as actions from '../../src/actions/FilmsActions';
import * as types from '../../src/constants/ActionTypes';

describe('films actions', () => {
  it(`filmsAreFetching should create ${types.FILMS_ARE_FETCHING} action`, () => {
    expect(actions.filmsAreFetching(true)).toEqual({
      type: types.FILMS_ARE_FETCHING,
      areFetching: true
    });
  });

  it(`fetchFilmsSuccess should create ${types.FETCH_FILMS_SUCCESS} action`, () => {
    expect(actions.fetchFilmsSuccess([])).toEqual({
      type: types.FETCH_FILMS_SUCCESS,
      films: []
    });
  });

  it(`fetchFilmsError should create ${types.FETCH_FILMS_ERROR} action`, () => {
    expect(actions.fetchFilmsError(true)).toEqual({
      type: types.FETCH_FILMS_ERROR,
      hasErrored: true
    });
  });

  it(`changeSearchBy should create ${types.CHANGE_SEARCH_BY} action`, () => {
    expect(actions.changeSearchBy('title')).toEqual({
      type: types.CHANGE_SEARCH_BY,
      searchBy: 'title'
    });
  });

  it(`selectFilm should create ${types.SELECT_FILM} action`, () => {
    expect(actions.selectFilm([])).toEqual({
      type: types.SELECT_FILM,
      selectedFilm: []
    });
  });

  it(`sortByRelease should create ${types.SORT_BY_RELEASE} action`, () => {
    expect(actions.sortByRelease(true)).toEqual({
      type: types.SORT_BY_RELEASE,
      byRelease: true
    });
  });
});
