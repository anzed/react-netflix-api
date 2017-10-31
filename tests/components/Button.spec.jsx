/* eslint no-undef:0 */
import React from 'react';
import { mount } from 'enzyme';
import Button from '../../src/components/common/Button';

const setup = () => {
  const props = {
    onButtonClick: jest.fn(),
    text: 'button'
  };

  const enzymeWrapper = mount(<Button {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('Button component', () => {
  it('should render', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('button').text()).toBe('button');
  });
});
