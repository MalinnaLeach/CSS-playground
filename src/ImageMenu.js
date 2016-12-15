import React, { Component } from 'react';
import Positioning from './Positioning';

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
        <Positioning changeAlignment={this.props.changeAlignment} increaseLeftMargin={this.props.increaseLeftMargin} decreaseLeftMargin = {this.props.decreaseLeftMargin}
        increaseRightMargin={this.props.increaseRightMargin} decreaseRightMargin={this.props.decreaseRightMargin}
        increaseTopMargin={this.props.increaseTopMargin} decreaseTopMargin = {this.props.decreaseTopMargin}
        increaseBottomMargin={this.props.increaseBottomMargin} decreaseBottomMargin = {this.props.decreaseBottomMargin} />
      </div>
    )
  }

}

export default TextMenu
