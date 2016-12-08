import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Container from '../src/ControlPanel';
import App from '../src/App';


describe('<ControlPanel />', () => {

  xit("can create a div inside playgorund", () => {
    const wrapper = mount(<App />);
    const button = wrapper.find('#createDiv');
    expect(wrapper.find('div').length).toEqual(4);
    button.simulate('click');
    expect(wrapper.find('div').length).toEqual(5);
  });

  it("can change the colour of the div inside playgorund", () => {
    const wrapper = mount(<App />);
    const button1 = wrapper.find('#createDiv');
    const button2 = wrapper.find('#changeColor');
    button1.simulate('click');
    expect(wrapper.state().color).toEqual("red");
    button2.simulate('click');
    expect(wrapper.state().color).toEqual("blue");
  });

});
