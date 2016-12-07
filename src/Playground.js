import React, { Component } from 'react';
import Popup from 'react-popup';
import Container from './Container';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = { div: 0 };
    this.createDiv = this.createDiv.bind(this);
    this.checkDiv = this.checkDiv.bind(this);
  }

  createDiv() {
    // Popup.alert('Click anywhere to start!');
    this.setState({ div: 1});
  }

  checkDiv() {
    if (this.state.div === 1) {return <Container />}
  }

  render () {
    return (
      <div className="playground" onClick={this.createDiv}>
        Playground goes here
        {this.checkDiv()}
      </div>
    );
  }




}

export default Playground;
