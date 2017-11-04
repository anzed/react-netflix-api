/* eslint no-undef:0 */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { FilmItem } from '../../src/components/film-item/FilmItem';

const setup = () => {
  const props = {
    data: {
      id: 1,
      title: 'Title',
      poster_path: '/path/to/poster',
      release_date: '2004-03-04'
    },
    fetchFilmDetails: jest.fn()
  };

  const enzymeWrapper = mount(
    <MemoryRouter>
      <FilmItem {...props} />
    </MemoryRouter>
  );

  return {
    props,
    enzymeWrapper
  };
};

describe('FilmItem component', () => {
  const { enzymeWrapper, props } = setup();

  it('should render', () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });

  it('should fetch film details on click', () => {
    enzymeWrapper.find('.film-item').simulate('click');
    expect(props.fetchFilmDetails.mock.calls.length).toBe(1);
  });
});
