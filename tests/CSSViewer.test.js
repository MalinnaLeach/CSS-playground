import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CSSViewer from '../src/CSSViewer';
import App from '../src/App';


describe('<CSSViewer />', () => {

  it("has a header", () => {
    const wrapper = shallow(<CSSViewer />);
    expect(wrapper.find('.header').length).toEqual(1);
  });

  it("displays the css code", () => {
    const wrapper = shallow(<CSSViewer />);
    expect(wrapper.find('.cssCode').length).toEqual(1);
  })

});
