import React, { Component } from 'react';
import Popup from 'react-popup';
import Menu from './Menu'
import AddText from './AddText'
import cssModule from './cssModule'
import '../public/css/Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {className: this.props.className, style: this.props.style, containers: [], text: [] }
    this.showMenu = this.showMenu.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.addChildDiv = this.addChildDiv.bind(this);
    this.renderDiv = this.renderDiv.bind(this);
    this.addChildText = this.addChildText.bind(this);
    this.increaseBorderWidth = this.increaseBorderWidth.bind(this);
    this.decreaseBorderWidth = this.decreaseBorderWidth.bind(this);
    this.changeBorderStyle = this.changeBorderStyle.bind(this);
    this.setDivWidth = this.setDivWidth.bind(this);
    this.setDivHeight = this.setDivHeight.bind(this);
  }

  render () {
    return (
      <div className={this.state.className} onClick={this.showMenu} style={this.state.style} >
        {this.renderDiv()}
        {this.renderText()}
      </div>
    );
  }

  showMenu() {
    const here = this
    Popup.create({
      content: <Menu value={here.state.color} onDrag={here.onDrag} increaseBorderWidth={here.increaseBorderWidth} decreaseBorderWidth={here.decreaseBorderWidth} setDivWidth={here.setDivWidth} setDivHeight={here.setDivHeight}
      changeBorderStyle={here.changeBorderStyle} addChildDiv={here.addChildDiv}/>,
      buttons: {
        right: ['ok']
      }
    })
  }

  renderDiv() {
    return this.state.containers.map(div => (
      <Container key={div} className={div} updateCssViewer={this.props.updateCssViewer} parent={this.state.className} style={{backgroundColor: "inherit", float: "left", width: "50%", height: "50%", borderWidth: "3px", borderStyle: "solid", borderColor: "#000"}}/>
    ))
  }

  renderText() {
    return this.state.text.map((text, index) => (
      <AddText key={index} textType={text} />
    ))
  }

  addChildDiv(className) {
    cssModule[className] = {}
    this.setState({ containers: [...this.state.containers, className]});
    this.props.updateCssViewer()
  }

  addChildText(textType) {
    this.setState({ text: [...this.state.text, textType]});
  }

  showMenu() {
    const here = this
    Popup.create({
      content: <Menu value={here.state.color} onDrag={here.onDrag} addChildDiv={here.addChildDiv} addChildText={here.addChildText}/>,
      buttons: {
        right: ['ok']
      }
    })
  }

///////////////////// CSS ALTERATION FUNCTIONS ////////////////////////
  onDrag(color) {
    this.state.style["backgroundColor"] = color;
    cssModule[this.state.className]["backgroundColor"] = color;
    this.props.updateCssViewer();
  }

  increaseBorderWidth() {
    var thickness = parseInt((this.state.style["borderWidth"].split("px"))[0]);
    this.state.style["borderWidth"] = String((thickness + 1)) + "px"
    this.props.updateCssViewer();
  }

  decreaseBorderWidth() {
    var thickness = parseInt((this.state.style["borderWidth"].split("px"))[0]);
    this.state.style["borderWidth"] = String((thickness - 1)) + "px"
    this.props.updateCssViewer();
  }

  changeBorderStyle(style) {
    this.state.style["borderStyle"] = style;
    this.props.updateCssViewer();
  }

  setDivWidth(width) {
    this.state.style["width"] = width;
    this.props.updateCssViewer();
  }

  setDivHeight(height) {
    this.state.style["height"] = height;
    this.props.updateCssViewer();
  }
///////////////////////////////////////////////////////////////////////

  updateCssModule() {
    cssModule[this.state.className] = this.state.style;
    this.props.updateCssViewer();
  }

  componentDidMount() {
    this.updateCssModule();
  };
}

export default Container;
