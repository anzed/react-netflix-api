/* eslint no-undef:0 */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { FilmDetails } from '../../src/components/film-details/FilmDetails';

const setup = () => {
  const props = {
    selectedFilm: {
      poster_path: '/path/to/poster',
      title: 'Title',
      vote_average: 4.7,
      category: 'Action',
      release_date: '2007-02-03',
      runtime: 96,
      overview: 'Really great film!',
    }
  };

  const enzymeWrapper = mount(
    <MemoryRouter>
      <FilmDetails {...props} />
    </MemoryRouter>
  );

  return {
    props,
    enzymeWrapper
  };
};

describe('FilmDetails component', () => {
  const { enzymeWrapper } = setup();

  it('should render', () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
