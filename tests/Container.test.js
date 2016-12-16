import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Container from '../src/Container';
import cssModule from '../src/cssModule';
import htmlModule from '../src/htmlModule';
import AddText from '../src/AddText';
import AddImage from '../src/AddImage';


describe('<Container />', () => {

  const wrapper = mount(<Container className="background" style={{backgroundColor: "green", width: "50%", height: "50%", borderWidth: "3px", borderStyle: "solid", borderColor: "#000", margin: "auto", borderRadius: "0px"}} rerenderWholeApp={() => {}} />);

  it("sets it's colour based on props", () => {
    expect(wrapper.state().style.backgroundColor).toEqual("green");
  });

  it("sets it's classname based on props", () => {
    expect(wrapper.find(".background").length).toEqual(1);
  });

  it("updates the CSS Module", () => {
    expect(cssModule["background"]["backgroundColor"]).toEqual("green");
  });

  it("is able to add a child container", () => {
    wrapper.instance().addChildDiv("babyDiv");
    expect(wrapper.find(".babyDiv").length).toEqual(1);
    expect(cssModule["babyDiv"]).toEqual({"backgroundColor": "inherit", "borderColor": "#000", "borderRadius": "0px", "borderStyle": "solid", "borderWidth": "3px", "height": "50%", "margin": "auto", "width": "50%"})
    expect(htmlModule[0].children).toEqual([{"children": [], "class": "babyDiv", "type": "div"}])
  });

  it("is able to add a text box", () => {
    wrapper.instance().addChildText("p");
    expect(wrapper.find(AddText).length).toEqual(1);
  });

  it("can update it's background colour", () => {
    wrapper.instance().onDrag("blue");
    expect(wrapper.state().style.backgroundColor).toEqual("blue")
    expect(cssModule["background"]["backgroundColor"]).toEqual("blue");
  });

  it("can add an image", () => {
    wrapper.instance().addChildImage();
    expect(wrapper.find(AddImage).length).toEqual(1);
  });

  it("can change border style", () => {
    wrapper.instance().changeBorderStyle("dotted");
    expect(wrapper.state().style.borderStyle).toEqual("dotted")
  })

  it("can change border radius", () => {
    wrapper.instance().changeBorderRadius("10");
    expect(wrapper.state().style.borderRadius).toEqual("10%")
  })

  it("can change border color", () => {
    wrapper.instance().changeBorderColor("Light grey");
    expect(wrapper.state().style.borderColor).toEqual("#D0D0D0")
  })

  it("can change div width", () => {
    wrapper.instance().updateDivSize("10", "width");
    expect(wrapper.state().style.width).toEqual("10%")
  })

  it("can change div height", () => {
    wrapper.instance().updateDivSize("10", "height");
    expect(wrapper.state().style.height).toEqual("10%")
  })

  it("can change the border width", () => {
    wrapper.instance().changeBorderWidth(1);
    expect(wrapper.state().style.borderWidth).toEqual("4px")
  })

  it("can change the alignment", () => {
    wrapper.instance().changeAlignment("left");
    expect(wrapper.state().style.float).toEqual("left")
  })

  it("can change the margin", () => {
    wrapper.instance().changeMargin(5, "Left");
    expect(wrapper.state().style.marginLeft).toEqual("5%")
  })

});
