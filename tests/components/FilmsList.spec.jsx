/* eslint no-undef:0 */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FilmsList } from '../../src/components/films-list/FilmsList';

jest.mock('../../src/components/film-item/FilmItem', () => 'FilmItem');
jest.mock('../../src/components/no-result/NoResult', () => 'NoResult');

const setup = () => {
  const props = {
    films: [
      {
        id: 0,
        poster_path: '/path/to/poster1',
        title: 'Title1',
        vote_average: 4.7,
        category: 'Action',
        release_date: '2007-02-03',
        runtime: 96,
        overview: 'Really great film!'
      },
      {
        id: 1,
        poster_path: '/path/to/poster2',
        title: 'Title2',
        vote_average: 4.4,
        category: 'Action',
        release_date: '2004-02-01',
        runtime: 94,
        overview: 'Really great film!!1'
      }
    ],
    areFetching: false,
    hasErrored: false,
    byRelease: true
  };

  const enzymeWrapper = mount(<FilmsList {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('FilmsList component', () => {
  const { enzymeWrapper } = setup();

  it('should render', () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });

  it('should call sortByRating when byRelease prop is false', () => {
    spyOn(enzymeWrapper.instance(), 'sortByRating').and.callThrough();
    enzymeWrapper.setProps({ byRelease: false });

    expect(enzymeWrapper.instance().sortByRating).toHaveBeenCalled();
  });

  it('should render loading message if areFetching is true', () => {
    enzymeWrapper.setProps({ areFetching: true });

    expect(enzymeWrapper.find('.loading-message').text()).toBe('Loading, please wait...');
  });
});
