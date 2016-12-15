import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Container from '../src/Container';
import cssModule from '../src/cssModule';
import htmlModule from '../src/htmlModule';


describe('<Container />', () => {

  const wrapper = mount(<Container className="testTastic" style={{backgroundColor: "green"}} updateCssViewer={() => {}} />);

  it("sets it's colour based on props", () => {
    expect(wrapper.state().style.backgroundColor).toEqual("green");
  });

  it("sets it's classname based on props", () => {
    expect(wrapper.find(".testTastic").length).toEqual(1);
  });

  it("updates the CSS Module", () => {
    expect(cssModule["testTastic"]["backgroundColor"]).toEqual("green");
  });

  it("is able to add a child container", () => {
    wrapper.instance().addChildDiv("babyDiv");
    expect(wrapper.find(".babyDiv").length).toEqual(1);
    expect(cssModule["babyDiv"]).toEqual({"backgroundColor": "inherit", "borderColor": "#000", "borderRadius": "0px", "borderStyle": "solid", "borderWidth": "3px", "height": "50%", "margin": "auto", "width": "50%"})
    expect(htmlModule[0]).toEqual({type: "div", class: "babyDiv"})
  });

  it("is able to add a text box", () => {
    wrapper.instance().addChildText("p");
    expect(wrapper.find(".text0").length).toEqual(1);
  });

  it("can update it's background colour", () => {
    wrapper.instance().onDrag("blue");
    expect(wrapper.state().style.backgroundColor).toEqual("blue")
    expect(cssModule["testTastic"]["backgroundColor"]).toEqual("blue");
  });


});
