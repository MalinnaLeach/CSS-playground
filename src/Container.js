import React, { Component } from 'react';
import Popup from 'react-popup';
import Menu from '../src/Menu'
import cssModule from '../src/cssModule'
import '../public/css/Container.css';


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {className: this.props.className, style: this.props.style, containers: [] }
    this.showMenu = this.showMenu.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.addChildDiv = this.addChildDiv.bind(this);
    this.renderDiv = this.renderDiv.bind(this);
    this.adjustContainerStyle = this.adjustContainerStyle.bind(this);
    this.setInitialInfo(props)
  }

  setInitialInfo(props) {
    if (props.parent === "background") {
      cssModule[props.className]["border"] = "5px solid #000";
      cssModule[props.className]["width"] = "50%";
      cssModule[props.className]["height"] = "50%";
    }
  }

  renderDiv() {
    return this.state.containers.map(div => (
      <Container key={div} className={div} style={this.newContainerStyle()} updateCssViewer={this.props.updateCssViewer} parent={this.state.className}/>
    ))
  }

  newContainerStyle() {
    var style = {};
    for (var key in this.state.style) {
      style[key] = this.state.style[key];
    }
    style["width"] = "50%";
    style["height"] = "50%";
    style["border"] = "5px solid #000";
    return style
  }

  adjustContainerStyle(property, value) {
    var style = this.state.style;
    style[property] = value;
    return style;
  }

  addChildDiv(className) {
    cssModule[className] = {}
    this.setState({ containers: [...this.state.containers, className]});
    this.props.updateCssViewer()
  }

  showMenu() {
    const here = this
    Popup.create({
      content: <Menu value={here.state.color} onDrag={here.onDrag} addChildDiv={here.addChildDiv}/>
    })
  }

  onDrag(color) {
    this.setState({
      style: this.adjustContainerStyle("backgroundColor", color)
    }, () => {
      cssModule[this.state.className]["backgroundColor"] = color
      this.props.updateCssViewer()
    });
  }

  render () {
    return (
      <div className={this.state.className} onClick={this.showMenu} style={this.state.style} >
        {this.renderDiv()}
      </div>
    );
  }

}

export default Container;
