import React, { Component } from 'react';
import Positioning from './Positioning';

class TextMenu extends Component {
  constructor (props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.placeholderCheck = this.placeholderCheck.bind(this);
    this.valueCheck = this.valueCheck.bind(this);
  }

  handleText (e) {
    this.props.updateText(e.target.value);
  }

  valueCheck() {
    if (this.props.content === "") {
      return null
  } else {
      return this.props.content
    }
  }

  placeholderCheck() {
    if (this.props.content === "") {
      return "Input your text"
  } else {
      return null
    }
  }

  render () {
    return (
      <div className="textInput">
        <p>Your text: </p>
        <input id="textInput" type="text" placeholder={this.placeholderCheck()} defaultValue={this.valueCheck()} onChange={this.handleText}/>
        <Positioning changeAlignment={this.props.changeAlignment} increaseLeftMargin={this.props.increaseLeftMargin} decreaseLeftMargin = {this.props.decreaseLeftMargin}
        increaseRightMargin={this.props.increaseRightMargin} decreaseRightMargin={this.props.decreaseRightMargin}
        increaseTopMargin={this.props.increaseTopMargin} decreaseTopMargin = {this.props.decreaseTopMargin}
        increaseBottomMargin={this.props.increaseBottomMargin} decreaseBottomMargin = {this.props.decreaseBottomMargin} />
      </div>
    )
  }

}

export default TextMenu
