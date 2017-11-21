import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from '../components/AboutPage';

describe('AboutPage.js', () => {
  test('Рендер компонента AboutPage без ошибок', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AboutPage />, div);
  });

});
