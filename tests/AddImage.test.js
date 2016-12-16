import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import AddImage from '../src/AddImage';


describe('<AddImage />', () => {

  it("can render a an image", () => {
    const wrapper = shallow(<AddImage/>);
    expect(wrapper.find("img").length).toEqual(1);
  });

  // it("can change image height", () => {
  //   const wrapper = shallow(<AddImage/>);
  //   wrapper.instance().updateHeight(10);
  //   expect(wrapper.().style.height).toEqual("10vh")
  // })



});
