import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Playground from '../src/Playground';


describe('<Playground />', () => {

  it('creates a new div on click', () => {
    const wrapper = mount(<Playground />);
    expect(wrapper.find('div').length).toEqual(1);
    wrapper.simulate('click');
    expect(wrapper.find('div').length).toEqual(2);
  });


});
