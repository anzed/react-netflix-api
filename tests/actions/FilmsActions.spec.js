/* eslint no-undef:0 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../../src/actions/FilmsActions';
import * as types from '../../src/constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('films actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

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

  it(`success fetchFilms create ${types.FILMS_ARE_FETCHING} and ${types.FETCH_FILMS_SUCCESS} actions`, () => {
    fetchMock
      .getOnce('/url', { body: { results: [] }, headers: { 'content-type': 'application/json' } });

    const expectedActions = [
      { type: types.FILMS_ARE_FETCHING, areFetching: true },
      { type: types.FILMS_ARE_FETCHING, areFetching: false },
      { type: types.FETCH_FILMS_SUCCESS, films: [] }
    ];
    const store = mockStore({ films: [] });

    return store.dispatch(actions.fetchFilms('/url')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`error fetchFilms create ${types.FILMS_ARE_FETCHING}, ${types.FETCH_FILMS_ERROR} and ${types.FETCH_FILMS_SUCCESS} actions`, () => {
    fetchMock.getOnce('/url', 404);

    const expectedActions = [
      { type: types.FILMS_ARE_FETCHING, areFetching: true },
      { type: types.FILMS_ARE_FETCHING, areFetching: false },
      { type: types.FETCH_FILMS_ERROR, hasErrored: true },
      { type: types.FETCH_FILMS_SUCCESS, films: [] }
    ];
    const store = mockStore({ films: [] });

    return store.dispatch(actions.fetchFilms('/url')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`success fetchFilmDetails create ${types.SELECT_FILM} action`, () => {
    fetchMock
      .getOnce('*', { body: {}, headers: { 'content-type': 'application/json' } });

    const store = mockStore({ selectedFilm: {} });

    return store.dispatch(actions.fetchFilmDetails()).then(() => {
      expect(store.getActions())
        .toEqual([{ type: types.SELECT_FILM, selectedFilm: {} }]);
    });
  });

  it(`error fetchFilmDetails create ${types.FETCH_FILMS_ERROR} action`, () => {
    fetchMock.getOnce('*', 404);

    const store = mockStore({ films: [] });

    return store.dispatch(actions.fetchFilmDetails()).then(() => {
      expect(store.getActions())
        .toEqual([{ type: types.FETCH_FILMS_ERROR, hasErrored: true }]);
    });
  });
});
