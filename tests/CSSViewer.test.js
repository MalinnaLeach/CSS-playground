import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CSSViewer from '../src/CSSViewer';
import CSSTranslator from '../src/CSSTranslator';

describe('<CSSViewer />', () => {

  it("renders a CSSTranslator", () => {
    const wrapper = shallow(<CSSViewer />);
    expect(wrapper.find(CSSTranslator).length).toEqual(1);
  })

});
