import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import Menu from './Menu'
import AddText from './AddText'
import AddImage from './AddImage'
import cssModule from './cssModule'
import htmlModule from './htmlModule';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {className: this.props.className, style: this.props.style, containers: [], text: [], images: [] }
    this.showMenu = this.showMenu.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.addChildDiv = this.addChildDiv.bind(this);
    this.renderDiv = this.renderDiv.bind(this);
    this.addChildText = this.addChildText.bind(this);
    this.addChildImage = this.addChildImage.bind(this);
    this.changeBorderStyle = this.changeBorderStyle.bind(this);
    this.changeBorderRadius = this.changeBorderRadius.bind(this);
    this.changeBorderColor = this.changeBorderColor.bind(this);
    this.changeAlignment = this.changeAlignment.bind(this);
    this.updateDivSize = this.updateDivSize.bind(this);
    this.changeBorderWidth = this.changeBorderWidth.bind(this);
    this.changeMargin = this.changeMargin.bind(this);
  }

  render () {
    return (
      <div className={this.state.className} onClick={this.showMenu} style={this.state.style} >
        {this.renderDiv()}
        {this.renderText()}
        {this.renderImage()}
      </div>
    );
  }

  componentDidMount() {
    cssModule[this.state.className] = this.state.style;
    this.props.rerenderWholeApp();
  }

  showMenu(e) {
    const here = this
    Popup.create({
      title: "You are working on: " + this.state.className,
      content: <Menu value={here.state.color} onDrag={here.onDrag} parentContainer={here.state.className}
      changeBorderRadius={here.changeBorderRadius} changeBorderColor={here.changeBorderColor}
      setDivWidth={here.setDivWidth} setDivHeight={here.setDivHeight}
      changeBorderStyle={here.changeBorderStyle} changeAlignment={here.changeAlignment} addChildDiv={here.addChildDiv} addChildText={here.addChildText}
      addChildImage={here.addChildImage} updateDivSize={here.updateDivSize} changeBorderWidth={here.changeBorderWidth} changeMargin={here.changeMargin}/>,
      buttons: {
        right: ['ok']
      }
    })
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  renderDiv() {
    return this.state.containers.map(div => (
      <Container key={div} className={div} rerenderWholeApp={this.props.rerenderWholeApp} style={{backgroundColor: "inherit", width: "50%", height: "50%", borderWidth: "3px", borderStyle: "solid", borderColor: "#000", margin: "auto", borderRadius: "0px"}}/>
    ))
  }

  renderImage() {
    return this.state.images.map((url, index) => (
      <AddImage key={index} imageUrl={url} height="30vh" className={"img"+String(index)} parent={this.state.className} rerenderWholeApp={this.props.rerenderWholeApp}/>
    ))
  }

  renderText() {
    return this.state.text.map((text, index) => (
      <AddText key={index} className={"text" + String(index)} textType={text} parent={this.state.className} rerenderWholeApp={this.props.rerenderWholeApp}/>
    ))
  }

  htmlUpdate(array, parent, name) {
    for (var object of array) {
      if (object.class === parent) {
        object.children.push({class: name, type: "div", children: []})
      } else if (object.children !== []) {
        this.htmlUpdate(object.children, parent, name)
      }
    }
  }

  addChildDiv(className) {
    cssModule[className] = {}
    this.htmlUpdate(htmlModule, this.props.className, className)
    this.setState({ containers: [...this.state.containers, className]});
    this.props.rerenderWholeApp()
  }

  addChildImage(url) {
    this.setState({images: [...this.state.images, url]});
    this.props.rerenderWholeApp()
  }

  addChildText(textType) {
    this.setState({ text: [...this.state.text, textType]});
  }


///////////////////// CSS ALTERATION FUNCTIONS ////////////////////////

  onDrag(color) {
    this.state.style["backgroundColor"] = color;
    cssModule[this.state.className]["backgroundColor"] = color;
    this.props.rerenderWholeApp();
  }

  changeBorderWidth(n) {
    var thickness = parseInt((this.state.style["borderWidth"].split("px"))[0]);
    this.state.style["borderWidth"] = String((thickness + n)) + "px"
    this.props.rerenderWholeApp();
  }

  changeBorderStyle(style) {
    this.state.style["borderStyle"] = style;
    this.props.rerenderWholeApp();
  }

  changeBorderRadius(radius) {
    this.state.style["borderRadius"] = String(radius) + "px";
    this.props.rerenderWholeApp();
  }

  changeBorderColor(color) {
    if (color == "Transparent") {
      color = "transparent"
    } else if (color == "Light grey") {
      color = "#D0D0D0"
    } else if (color == "Dark grey") {
      color = "#808080"
    } else if (color == "Black") {
      color = "#000"
    }
    this.state.style["borderColor"] = color;
    this.props.rerenderWholeApp();
  }

  updateDivSize(size, dimension) {
    this.state.style[dimension] = String(size) + "%"
    this.props.rerenderWholeApp();
  }

  changeAlignment(alignment) {
    if (alignment === "centre") {
      delete this.state.style.float
    } else {
      this.state.style["float"] = alignment
    }
    this.props.rerenderWholeApp();
  }

  changeMargin(size, dimension) {
    if (!!this.state.style["margin" + dimension]) {
      var margin = parseInt((this.state.style["margin" + dimension].split("%"))[0]);
      this.state.style["margin" + dimension] = String((margin + size)) + "%"
      this.props.rerenderWholeApp();
    } else {
      this.state.style["margin" + dimension] = String(size) + "%"
      this.props.rerenderWholeApp();
    }
  }


///////////////////////////////////////////////////////////////////////

}

export default Container;
