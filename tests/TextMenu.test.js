import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import TextMenu from '../src/TextMenu';

describe ("<TextMenu />", () => {

  it("will run props function with text input as argument", () => {
    const mockUpdateText = jest.fn();
    const wrapper = mount(<TextMenu updateText={mockUpdateText}/>);
    const textInput = wrapper.find("#textInput");
    textInput.simulate('change', {target: {value: "here is my lovely text"}});
    expect(mockUpdateText.mock.calls).toEqual([["here is my lovely text"]]);
  })

})
