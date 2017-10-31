/* eslint no-undef:0 */
import * as reducers from '../../src/reducers/filmsReducers';
import * as types from '../../src/constants/ActionTypes';

describe('films reducers', () => {
  it('fetchFilmsError should return initial state', () => {
    expect(reducers.fetchFilmsError(undefined, {})).toEqual(false);
  });

  it(`fetchFilmsError should handle ${types.FETCH_FILMS_ERROR}`, () => {
    expect(
      reducers.fetchFilmsError([], { type: types.FETCH_FILMS_ERROR, hasErrored: true })
    ).toEqual(true);
  });

  it('fetchFilmsSuccess should return initial state', () => {
    expect(reducers.fetchFilmsSuccess(undefined, {})).toEqual([]);
  });

  it(`fetchFilmsSuccess should handle ${types.FETCH_FILMS_SUCCESS}`, () => {
    expect(
      reducers.fetchFilmsSuccess([], { type: types.FETCH_FILMS_SUCCESS, films: [] })
    ).toEqual([]);
  });

  it('filmsAreFetching should return initial state', () => {
    expect(reducers.filmsAreFetching(undefined, {})).toEqual(false);
  });

  it(`filmsAreFetching should handle ${types.FILMS_ARE_FETCHING}`, () => {
    expect(
      reducers.filmsAreFetching([], { type: types.FILMS_ARE_FETCHING, areFetching: true })
    ).toEqual(true);
  });

  it('changeSearchBy should return initial state', () => {
    expect(reducers.changeSearchBy(undefined, {})).toEqual('title');
  });

  it(`changeSearchBy should handle ${types.CHANGE_SEARCH_BY}`, () => {
    expect(
      reducers.changeSearchBy([], { type: types.CHANGE_SEARCH_BY, searchBy: 'director' })
    ).toEqual('director');
  });

  it('selectFilm should return initial state', () => {
    expect(reducers.selectFilm(undefined, {})).toEqual({});
  });

  it(`selectFilm should handle ${types.SELECT_FILM}`, () => {
    expect(
      reducers.selectFilm([], { type: types.SELECT_FILM, selectedFilm: {} })
    ).toEqual({});
  });

  it('sortByRelease should return initial state', () => {
    expect(reducers.sortByRelease(undefined, {})).toEqual(true);
  });

  it(`sortByRelease should handle ${types.SORT_BY_RELEASE}`, () => {
    expect(
      reducers.sortByRelease([], { type: types.SORT_BY_RELEASE, byRelease: false })
    ).toEqual(false);
  });
});
