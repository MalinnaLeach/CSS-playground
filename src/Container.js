import React, { Component } from 'react';
import Popup from 'react-popup';
import '../public/css/Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: 'red' }
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor () {
    this.setState( { backgroundColor: 'blue' })
  }

  render () {
    const containerStyle = {
    }

    return (
      <div className="container" style={ this.state } onClick={this.changeColor}>

      </div>
    );
  }


}

export default Container;
