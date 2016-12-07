import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../src/App';
import Header from '../src/Header';
import Playground from '../src/Playground';

describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders a header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('renders a container div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Playground).length).toEqual(1);
  });
});
