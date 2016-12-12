import React, { Component } from 'react';

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
      </div>
    )
  }

}

export default TextMenu
