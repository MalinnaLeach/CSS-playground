import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import TextMenu from '../src/TextMenu';
import Positioning from '../src/Positioning'

describe ("<TextMenu />", () => {

  it("will run props function with text input as argument", () => {
    const mockUpdateText = jest.fn();
    const wrapper = mount(<TextMenu updateText={mockUpdateText}/>);
    const textInput = wrapper.find("#textInput");
    textInput.simulate('change', {target: {value: "here is my lovely text"}});
    expect(mockUpdateText.mock.calls).toEqual([["here is my lovely text"]]);
  })

  it("will run props function with font size input as argument", () => {
    const mockUpdateFontSize = jest.fn();
    const wrapper = mount(<TextMenu changeFontSize={mockUpdateFontSize}/>);
    const textInput = wrapper.find("#fontSizeInput");
    textInput.simulate('change', {target: {value: "10"}});
    expect(mockUpdateFontSize.mock.calls).toEqual([["10"]]);
  })

  it("show a placeholder when content is null", () => {
    const wrapper = mount(<TextMenu content="" />);
    expect(wrapper.instance().valueCheck()).toEqual(null)
    expect(wrapper.instance().placeholderCheck()).toEqual("Input your text")
  })

  it("show the content when there is previous content", () => {
    const wrapper = mount(<TextMenu content="The content" />);
    expect(wrapper.instance().valueCheck()).toEqual("The content")
    expect(wrapper.instance().placeholderCheck()).toEqual(null)
  })

  it("will render a Positioning component", () => {
    const wrapper = shallow(<TextMenu />);
    expect(wrapper.find(Positioning).length).toEqual(1);
  })

})
