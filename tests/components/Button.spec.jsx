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
  const { enzymeWrapper, props } = setup();

  it('should render', () => {
    expect(enzymeWrapper.find('button').text()).toBe('button');
    expect(enzymeWrapper.find('button').hasClass('active')).toBe(false);

    enzymeWrapper.setProps({ isActive: true });
    expect(enzymeWrapper.find('button').hasClass('active')).toBe(true);
  });

  it('should call onButtonClick when button is clicked', () => {
    enzymeWrapper.find('button').simulate('click');
    expect(props.onButtonClick.mock.calls.length).toBe(1);
  });
});
