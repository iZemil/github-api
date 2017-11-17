import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from '../AboutPage';

describe('AboutPage.js', () => {
  it('Рендер компонента AboutPage без ошибок', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AboutPage />, div);
  })
});
