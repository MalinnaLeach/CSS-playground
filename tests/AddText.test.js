import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import AddText from '../src/AddText';
import htmlModule from '../src/htmlModule';


describe('<AddText />', () => {

  const wrapper = mount(<AddText textType="p" className="text0" parent="background" rerenderWholeApp={() => {}} />);

  it("can render a p component", () => {
    expect(wrapper.state().textType).toEqual("p");
  });

  it("can render an h1 component", () => {
    const h1Wrapper = mount(<AddText textType="h1" className="text0" rerenderWholeApp={() => {}} />);
    expect(h1Wrapper.state().textType).toEqual("h1");
  });

  it("can update it's own text content", () => {
    wrapper.instance().updateText("some test text");
    expect(wrapper.state().content).toEqual("some test text");
    expect(htmlModule[0].children[0].content).toEqual("some test text");
  })

  it("can update it's own alignment", () => {
    wrapper.instance().changeAlignment("right");
    expect(wrapper.state().style.float).toEqual("right");
  })

  it("can adjust it's font size", () => {
    wrapper.instance().changeFontSize(10);
    expect(wrapper.state().style.fontSize).toEqual("10px");
  })

  it("can change it's margin", () => {
    wrapper.instance().changeMargin(5, "Left");
    expect(wrapper.state().style.marginLeft).toEqual("5%")
  })

});
