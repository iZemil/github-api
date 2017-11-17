import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import UserProfile from '../UserProfile';

describe('AboutPage.js', () => {
  const renderedComponent = shallow(
    <Home username={'Alice'} changeUsername={jest.fn()} />
  );

  it('Рендер компонента UserProfile без ошибок', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserProfile />, div);
  })
});