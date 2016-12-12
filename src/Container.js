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
    this.increaseBorderWidth = this.increaseBorderWidth.bind(this)
    this.decreaseBorderWidth = this.decreaseBorderWidth.bind(this)
  }

  componentDidMount() {
    this.updateCssModule();
  };

  updateCssModule() {
    cssModule[this.state.className] = this.state.style;
    this.props.updateCssViewer();
  }

  renderDiv() {
    return this.state.containers.map(div => (
      <Container key={div} className={div} updateCssViewer={this.props.updateCssViewer} parent={this.state.className} style={{backgroundColor: "inherit", float: "left", width: "50%", height: "50%", borderWidth: "3px", borderStyle: "solid", borderColor: "#000"}}/>
    ))
  }

  addChildDiv(className) {
    cssModule[className] = {}
    this.setState({ containers: [...this.state.containers, className]});
    this.props.updateCssViewer()
  }

  showMenu() {
    const here = this
    Popup.create({
      content: <Menu value={here.state.color} onDrag={here.onDrag} increaseBorderWidth={here.increaseBorderWidth} decreaseBorderWidth={here.decreaseBorderWidth} addChildDiv={here.addChildDiv}/>,
      buttons: {
        right: ['ok']
      }
    })
  }

  onDrag(color) {
    this.state.style["backgroundColor"] = color;
    cssModule[this.state.className]["backgroundColor"] = color;
    this.props.updateCssViewer();
  }

  increaseBorderWidth() {
    var thickness = parseInt((this.state.style["borderWidth"].split("px"))[0]);
    this.state.style["borderWidth"] = String((thickness + 1)) + "px"
    this.forceUpdate()
  }

  decreaseBorderWidth() {
    var thickness = parseInt((this.state.style["borderWidth"].split("px"))[0]);
    this.state.style["borderWidth"] = String((thickness - 1)) + "px"
    this.forceUpdate()
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
