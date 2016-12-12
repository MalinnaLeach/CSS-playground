import React, { Component } from 'react';

class TextMenu extends Component {
  constructor (props) {
    super(props);
    this.handleText = this.handleText.bind(this);
  }

  handleText (e) {
    this.props.updateText(e.target.value);
  }

  render () {
    return (
      <div className="textInput">
        <p>Your text: </p>
        <input id="textInput" type="text" placeholder="Input your text here..." onChange={this.handleText}/>
      </div>
    )
  }

}

export default TextMenu
