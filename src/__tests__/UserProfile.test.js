jest.unmock('../components/UserProfile');
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserProfile from '../components/UserProfile';
import renderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() });

describe('UserProfile.js', () => {
  it('Рендер компонента UserProfile без ошибок', () => {
    const data = {
      isFetching: true,
      avatar_url: 'http://avatarka.ru/13',
      login: 'iZemil',
      name: 'Emil Zaripov',
      public_repos: 6,
      url: 'https://github.com/'
    };

    const tree = renderer.create(
      <UserProfile user={{data: data}} />
    ).toJSON();

    expect(tree).toMatchSnapshot();

  })
});