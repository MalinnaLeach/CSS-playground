import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Container from '../src/Container';


describe('<Container />', () => {

  it("sets it's colour based on props", () => {
    const wrapper = mount(<Container color="green"/>);
    const object = wrapper.find(".container");
    expect(object.props().style.backgroundColor).toEqual('green');
  });


});
