import React, { Component } from 'react';
import Popup from 'react-popup';
import '../public/css/Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="container" style={ {backgroundColor: this.props.color} } >
      </div>
    );
  }


}

export default Container;
