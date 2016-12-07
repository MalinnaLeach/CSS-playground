import React, { Component } from 'react';
import Popup from 'react-popup';
import '../public/css/ControlPanel.css';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.addChildDiv = this.addChildDiv.bind(this)
  }

  render () {

    return (
      <div className="ControlPanel">
      <button id="createDiv" onClick={this.addChildDiv}>Create new div</button>
      </div>

    );
  }

  addChildDiv() {
    this.props.addChildDiv();
    }


}
export default ControlPanel;
