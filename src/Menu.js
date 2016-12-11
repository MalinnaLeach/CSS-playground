import React, { Component } from 'react';
import ColorPicker from 'react-color-picker';
import 'react-color-picker/index.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'white', className: ''};
    this.handleClassName = this.handleClassName.bind(this)
    this.handleNewDiv = this.handleNewDiv.bind(this)
    }

  render () {
    var colourBoxStyle = {background: this.state.color, width: 100, height: 50, color: 'white', border: "3px solid black"}
    return (
      <div className="menu">
      <ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)}/>
      <div style={colourBoxStyle}>
        {this.state.color}
      </div>
      <input id="classInput" type="text" name="className" placeholder="Div class name" onChange={this.handleClassName}/>
      <button id="newDiv" onClick={this.handleNewDiv}>Create new div</button>
      </div>
    );
  }

  handleClassName(e) {
    this.setState({className: e.target.value});
  }

  handleNewDiv () {
    this.props.addChildDiv(this.state.className)
  }

  onDrag (color, c) {
    this.props.onDrag(color);
    this.setState({color: color});
  }

}


export default Menu;
