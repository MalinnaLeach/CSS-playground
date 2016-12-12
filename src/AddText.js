import React, { Component } from 'react';
import Popup from 'react-popup';

class AddText extends Component {
  constructor(props) {
    super(props);
    this.state = {textType: props.textType}
    this.renderTextType = this.renderTextType.bind(this)
  }

  renderTextType () {
    if (this.props.textType === "h1") {
      return <h1 className="h1"> Click here to edit text </h1>
    } else {
      return <p className="p"> Click here to edit text </p>
    }
  }

  render () {
    return (
      <div className="AddText">
        {this.renderTextType()}
      </div>
    )
  }

}

export default AddText;
