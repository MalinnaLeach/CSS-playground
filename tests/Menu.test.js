import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Menu from '../src/Menu';
import ColorPicker from 'react-color-picker';

describe ("Menu", () => {

  it("renders a ColorPicker", () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find(ColorPicker).length).toEqual(1);
  })

  it("will update itself and run a props function when colour chosen", () => {
    const mockOnDrag = jest.fn();
    const wrapper = mount(<Menu onDrag={mockOnDrag}/>);
    wrapper.instance().onDrag("blue");
    expect(mockOnDrag.mock.calls).toEqual([["blue"]]);
    expect(wrapper.state().color).toEqual("blue");
  })

  it("will run a props function when new div requested", () => {
    const mockAddChildDiv = jest.fn();
    const wrapper = mount(<Menu addChildDiv={mockAddChildDiv}/>);
    const textInput = wrapper.find("#classInput");
    const button = wrapper.find("#newDiv");
    textInput.simulate('change', {target: {value: "newTestDiv"}});
    button.simulate('click');
    expect(mockAddChildDiv.mock.calls).toEqual([["newTestDiv"]]);
    expect(wrapper.state().className).toEqual("newTestDiv");
  })

  it("will run a props function with h1 argument when clicked add title", () => {
    const mockAddChildText = jest.fn();
    const wrapper = mount(<Menu addChildText={mockAddChildText}/>);
    const button = wrapper.find("#newTitle");
    button.simulate('click');
    expect(mockAddChildText.mock.calls).toEqual([["h1"]]);
  })

  it("will run a props function with p argument when clicked add paragraph", () => {
    const mockAddChildText = jest.fn();
    const wrapper = mount(<Menu addChildText={mockAddChildText}/>);
    const button = wrapper.find("#newParagraph");
    button.simulate('click');
    expect(mockAddChildText.mock.calls).toEqual([["p"]]);
  })

})
