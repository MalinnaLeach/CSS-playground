import React, { Component } from 'react';
import Popup from 'react-popup';
import '../public/css/ControlPanel.css';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.addChildDiv = this.addChildDiv.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  render () {
    return (
      <div className="ControlPanel">
      <button id="createDiv" onClick={this.addChildDiv}>Create new div</button>
      <button id="changeColor" onClick={this.changeColor}>Change the colour</button>
      </div>

    );
  }

  addChildDiv() {
    this.props.addChildDiv();
  }

  changeColor() {
    this.props.changeColor();
  }

}
export default ControlPanel;
