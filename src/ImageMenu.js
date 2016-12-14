import React, { Component } from 'react';

class TextMenu extends Component {
  constructor (props) {
    super(props);
    this.handleHeight = this.handleHeight.bind(this);
    this.heightCheck = this.heightCheck.bind(this);
  }

  handleHeight (e) {
    this.props.updateHeight(e.target.value);
  }


  heightCheck() {
    return this.props.height
  }


  render () {
    return (
      <div className="textInput">
        <p>Change image size: </p>
        <input id="textInput" type="text" defaultValue={this.heightCheck()} onChange={this.handleHeight}/>
      </div>
    )
  }

}

export default TextMenu
