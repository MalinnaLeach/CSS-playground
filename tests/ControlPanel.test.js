import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Container from '../src/ControlPanel';
import App from '../src/App';


describe('<ControlPanel />', () => {
  it("can create a div inside playgorund", () => {
    const wrapper = mount(<App />);
    const button = wrapper.find('#createDiv');
    expect(wrapper.find('div').length).toEqual(4);
    button.simulate('click');
    expect(wrapper.find('div').length).toEqual(5);
  });
});
