import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CSSTranslator from '../src/CSSTranslator';

describe('<CSSTranslator />', () => {

  it("renders the CSS correctly", () => {
    const wrapper = shallow(<CSSTranslator name="background" />);
    expect(wrapper.text()).toEqual(".background { background-color: white;  height: 100vh;  } ");
  })

});
