/* eslint no-undef:0 */
import React from 'react';
import { mount } from 'enzyme';
import TextInput from '../../src/components/common/TextInput';

const setup = () => {
  const props = {
    onPressEnter: jest.fn(),
    inputRef: jest.fn()
  };

  const enzymeWrapper = mount(<TextInput {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('TextInput component', () => {
  const { enzymeWrapper, props } = setup();

  it('should render', () => {
    expect(props.inputRef.mock.calls.length).toEqual(1);
  });

  it('should call onPressEnter when Enter button is pressed', () => {
    enzymeWrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(props.onPressEnter.mock.calls.length).toBe(1);

    enzymeWrapper.find('input').simulate('keypress', { key: 'a' });
    expect(props.onPressEnter.mock.calls.length).toBe(1);
  });
});
