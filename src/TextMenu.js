import React, { Component } from 'react';
import Positioning from './Positioning';

class TextMenu extends Component {
  constructor (props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.placeholderCheck = this.placeholderCheck.bind(this);
    this.valueCheck = this.valueCheck.bind(this);
    this.handleFontSize = this.handleFontSize.bind(this);
  }

  handleText(e) {
    this.props.updateText(e.target.value);
  }

  handleFontSize(e) {
    this.props.changeFontSize(e.target.value);
  }

  valueCheck() {
    if (this.props.content === "") {
      return null
  } else {
      return this.props.content
    }
  }

  sizeCheck() {
    if (!!this.props.fontSize) {
      return this.props.fontSize.split("px")[0]
  } else {
      return null
    }
  }

  placeholderCheck() {
    if (this.props.content === "") {
      return "Input your text"
  } else {
      return null
    }
  }

  sizePlaceCheck() {
    if (!!this.props.fontSize) {
      return null
  } else {
      return "Input font size in pixels"
    }
  }

  render () {
    return (
      <div className="textInput">
        <p>Your text: </p>
        <input id="textInput" type="text" placeholder={this.placeholderCheck()} defaultValue={this.valueCheck()} onChange={this.handleText} />
        <p>Change font size: </p>
        <input id="fontSizeInput" type="text" placeholder={this.sizePlaceCheck()} defaultValue={this.sizeCheck()} onChange={this.handleFontSize} /> px
        <Positioning changeAlignment={this.props.changeAlignment} changeMargin={this.props.changeMargin} />
      </div>
    )
  }

}

export default TextMenu
