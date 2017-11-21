jest.unmock('../components/Issues');
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Issues from '../components/Issues';
import renderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() });

describe('Issues.js', () => {
  it('Рендер компонента Issues без ошибок', () => {
    const issues = {
      list: [
        {
          id: 1,
          number: 1,
          title: 'Заголовок 1',
          created_at: '2017-11-18'
        },
        {
          id: 2,
          number: 2,
          title: 'Заголовок 2',
          created_at: '2017-11-20'
        }
      ]
    };

    const tree = renderer.create(
      <Issues issues={{issues}} />
    ).toJSON();

    expect(tree).toMatchSnapshot();

  })
});