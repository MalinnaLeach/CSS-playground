import React, { Component } from 'react';
import Popup from 'react-popup';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = { test: "" };
    this.createDiv = this.createDiv.bind(this);
  }

  createDiv() {
    // Popup.alert('Click anywhere to start!');
    this.setState({ test: "Click here"});
  }

  render () {
    return (
      <div className="playground" onClick={this.createDiv}>
        Playground goes here
      </div>
    );
  }


}

export default Playground;
