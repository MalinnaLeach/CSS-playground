import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Container from '../src/Container';


describe('<Container />', () => {

  it("changes it's colour on click", () => {
    const wrapper = mount(<Container />);
    expect(wrapper.state().backgroundColor).toEqual('red');
    wrapper.simulate('click');
    expect(wrapper.state().backgroundColor).toEqual('blue');
  });


});
