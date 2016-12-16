import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CSSTranslator from '../src/CSSTranslator';
import cssModule from '../src/cssModule';

describe('<CSSTranslator />', () => {

  it("renders the CSS correctly", () => {
    cssModule["background"] = {backgroundColor: "white",  height: "100vh"};
    const wrapper = shallow(<CSSTranslator name="background" />);
    expect(wrapper.text()).toEqual(".background { background-color: white;  height: 100vh;  } ");
  })

});
