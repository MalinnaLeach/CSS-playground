import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import AddText from '../src/AddText';


describe('<AddText />', () => {

  it("can render a p component", () => {
    const wrapper = shallow(<AddText textType="p" />);
    expect(wrapper.find(".p").length).toEqual(1);
  });

  it("can render an h1 component", () => {
    const wrapper = shallow(<AddText textType="h1" />);
    expect(wrapper.find(".h1").length).toEqual(1);
  });

  it("can update it's own text content", () => {
    const wrapper = mount(<AddText textType="h1" />);
    wrapper.instance().updateText("some test text");
    expect(wrapper.state().content).toEqual("some test text");
  })

  it("can update it's own alignment", () => {
    const wrapper = mount(<AddText textType="h1" />);
    wrapper.instance().changeAlignment("right");
    expect(wrapper.state().style.float).toEqual("right");
  })

});
