import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
Enzyme.configure({ adapter: new Adapter() });

test('Рендер компонента App без ошибок', () => {

  const app = shallow(
    <App />
  );
  expect(app).toMatchSnapshot();
});