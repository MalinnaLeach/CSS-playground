import React, { Component } from 'react';
import Popup from 'react-popup';
import Container from './Container';
import '../public/css/Playground.css';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.checkDiv = this.checkDiv.bind(this);
  }

  checkDiv() {
    if (this.props.divCount === 1) {return <Container />}
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
