import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../components/Menu';
Enzyme.configure({ adapter: new Adapter() });

test('Рендер компонента Menu без ошибок', () => {

  const menu = shallow(
    <Menu />
  );
  expect(menu).toMatchSnapshot();
});