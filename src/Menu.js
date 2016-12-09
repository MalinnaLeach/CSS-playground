import React, { Component } from 'react';
import ColorPicker from 'react-color-picker';
import cssModule from './cssModule';
import 'react-color-picker/index.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'white', className: ''};
    this.handleClassName = this.handleClassName.bind(this)
    this.sendClassName = this.sendClassName.bind(this)
    this.addChildDiv = this.addChildDiv.bind(this)
  }

  render () {
    return (
      <div className="menu">
      <ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)}/>
      <div style={{
        background: this.state.color,
        width: 100,
        height: 50,
        color: 'white'
      }}>
      {this.state.color}
      </div>
      <input type="text" name="className" placeholder="Div class name" onChange={this.handleClassName}/>
      <button onClick = {this.addChildDiv}>Create new div</button>
      </div>
    );
  }

  handleClassName(e) {
    this.setState({className: e.target.value});
  }

  sendClassName() {
    cssModule[this.state.className] = {}
  }

  addChildDiv() {
    this.sendClassName();
    this.props.addChildDiv();

  }

  onDrag (color, c) {
    this.props.onDrag(color);
    this.setState({color: color});
  }

}


export default Menu;
