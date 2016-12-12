import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import AddText from '../src/AddText';


describe('<AddText />', () => {

  const wrapper = shallow(<AddText textType="p" />);

  it("renders p component", () => {
    expect(wrapper.find(".p").length).toEqual(1);
  });
});
