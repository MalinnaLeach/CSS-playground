import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CSSViewer from '../src/CSSViewer';
import CSSTranslator from '../src/CSSTranslator';
import cssModule from '../src/cssModule';

describe('<CSSViewer />', () => {

  it("renders a CSSTranslator", () => {
    cssModule["background"] = {backgroundColor: "white",  height: "100vh"};
    const wrapper = shallow(<CSSViewer />);
    expect(wrapper.find(CSSTranslator).length).toEqual(1);
  })

});
