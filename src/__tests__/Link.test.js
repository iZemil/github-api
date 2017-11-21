import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Link from '../components/Link';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('Link.js', () => {
  
  it('should handle the click event', () => {
    window.alert = jest.fn();

    const output = shallow(
      <Link title="mockTitle" url="mockUrl" />
    );
    output.simulate('click');

    // testing output of alet fn
    expect(window.alert).toHaveBeenCalledWith('clicked');
  });

  it('should handle state changes', () => {
    const output = shallow(
      <Link title="mockTitle" url="mockUrl" />
    );
    
    expect(output.state().clicked).toEqual(false);
    output.simulate('click');
    expect(output.state().clicked).toEqual(true);
  });

});

// The most easiest way to mock files is
// using the jest.mock function which automatically
// mocks the file by returning mocked functions.
// jest.mock('react-dom');
// https://medium.com/wehkamp-techblog/unit-testing-your-react-application-with-jest-and-enzyme-81c5545cee45