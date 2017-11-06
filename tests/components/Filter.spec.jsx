/* eslint no-undef:0 */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Filter } from '../../src/components/filter/Filter';

const setup = () => {
  const props = {
    location: {
      pathname: 'search'
    },
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
    sortByRelease: jest.fn(),
    byRelease: true
  };

  const enzymeWrapper = mount(<Filter {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('Filter component', () => {
  const { enzymeWrapper, props } = setup();

  it('should render', () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });

  it('should display films counter', () => {
    expect(enzymeWrapper.find('.total-found').text()).toBe('2 movies found');

    enzymeWrapper.setProps({
      films: [{
        id: 0,
        poster_path: '/path/to/poster1',
        title: 'Title1',
        vote_average: 4.7,
        category: 'Action',
        release_date: '2007-02-03',
        runtime: 96,
        overview: 'Really great film!'
      }]
    });

    expect(enzymeWrapper.find('.total-found').text()).toBe('1 movie found');
  });

  it('should change sort params on button click', () => {
    const buttonsCount = enzymeWrapper.find('button').length;

    enzymeWrapper.find('button').forEach((node) => {
      node.simulate('click');
    });

    expect(props.sortByRelease.mock.calls.length).toBe(buttonsCount);
  });

  it(`shouldn't render if path doesn't include 'search'`, () => {
    enzymeWrapper.setProps({ location: { pathname: 'ololo' } });

    expect(enzymeWrapper.find('.filter-container').length).toBe(0);
  });
});
