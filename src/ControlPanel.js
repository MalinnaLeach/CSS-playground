import React, { Component } from 'react';
import Popup from 'react-popup';
import '../public/css/ControlPanel.css';
import ColorPicker from 'react-color-picker';
import 'react-color-picker/index.css'

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.addChildDiv = this.addChildDiv.bind(this);
    this.changeColor = this.changeColor.bind(this);

    this.state = {color: "blue"}

  }

  render () {
    return (
      <div className="ControlPanel" style={{backgroundColor: this.state.color}}>
        <button id="createDiv" onClick={this.addChildDiv}>Create new div</button>
        <button id="changeColor" onClick={this.changeColor}>Change the colour</button>
      </div>

    );
  }

  addChildDiv() {
    this.props.addChildDiv();
    const here = this;
    // Popup.create({
    //   content: <ColorPicker value={here.state.color} onDrag={here.onDrag.bind(here)}/>
    // });
  }

  onDrag(color, c) {
    this.setState({color: color});
  }

  changeColor() {
    this.props.changeColor();
  }

}
export default ControlPanel;
