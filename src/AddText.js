import React, { Component } from 'react';
import Popup from 'react-popup';

class AddText extends Component {
  constructor(props) {
    super(props);
    this.state = {textType: props.textType}
  }

render () {
  return (

    <p className="p"> Click here to edit text </p>
  )
}
}

export default AddText;
