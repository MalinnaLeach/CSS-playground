import React, { Component } from 'react';
import ColorPicker from 'react-color-picker';
import 'react-color-picker/index.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'white', className: ''};
    this.handleClassName = this.handleClassName.bind(this)
    this.handleNewDiv = this.handleNewDiv.bind(this)
    this.increaseBorderWidth = this.increaseBorderWidth.bind(this)
    this.decreaseBorderWidth = this.decreaseBorderWidth.bind(this)
    }

  render () {
    var colourBoxStyle = {background: this.state.color, width: 100, height: 50, color: 'white', borderWidth: "3px", borderStyle: "solid", borderColor: "#000"}
    return (
      <div className="menu">
      <ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)}/>
      <div style={colourBoxStyle}>
        {this.state.color}
      </div>
      <input id="classInput" type="text" name="className" placeholder="Div class name" onChange={this.handleClassName}/>
      <button id="newDiv" onClick={this.handleNewDiv}>Create new div</button>
      <button id="increase" onClick={this.increaseBorderWidth}>+</button>
      <button id="decrease" onClick={this.decreaseBorderWidth}>-</button>
      </div>
    );
  }

  handleClassName(e) {
    this.setState({className: e.target.value});
  }

  handleNewDiv () {
    this.props.addChildDiv(this.state.className)
  }

  increaseBorderWidth () {
    this.props.increaseBorderWidth()
  }

  decreaseBorderWidth () {
    this.props.decreaseBorderWidth()
  }

  onDrag (color, c) {
    this.props.onDrag(color);
    this.setState({color: color});
  }

}


export default Menu;
