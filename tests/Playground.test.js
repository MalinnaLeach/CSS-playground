import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Playground from '../src/Playground';


describe('<Playground />', () => {

  it('creates a new div dependent on props', () => {
    const wrapper1 = mount(<Playground divCount={0}/>);
    expect(wrapper1.find('div').length).toEqual(1);
    const wrapper2 = mount(<Playground divCount={1}/>);
    expect(wrapper2.find('div').length).toEqual(2);
  });
});
