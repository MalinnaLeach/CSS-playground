import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import Header from '../src/Header';
import Container from '../src/Container';
import CSSViewer from '../src/CSSViewer';
import HTMLViewer from '../src/HTMLViewer';


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
    expect(wrapper.find(Container).length).toEqual(1);
  });

  it('renders a CSS viewer div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CSSViewer).length).toEqual(1);
  })

  it('renders a HTML viewer div when chosen', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().updateView("html");
    expect(wrapper.find(HTMLViewer).length).toEqual(1);
    expect(wrapper.find(CSSViewer).length).toEqual(0);
  })

});
