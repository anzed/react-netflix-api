/* eslint no-undef:0 */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../src/components/footer/Footer';

const enzymeWrapper = mount(<Footer />);

describe('Footer component', () => {
  it('should render', () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
