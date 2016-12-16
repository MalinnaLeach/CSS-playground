import React, { Component } from 'react';
import Positioning from './Positioning';

class ImageMenu extends Component {
  constructor (props) {
    super(props);
    this.handleHeight = this.handleHeight.bind(this);
    this.heightCheck = this.heightCheck.bind(this);
    this.increaseLeftMargin = this.increaseLeftMargin.bind(this);
    this.decreaseLeftMargin = this.decreaseLeftMargin.bind(this);
    this.increaseRightMargin = this.increaseRightMargin.bind(this);
    this.decreaseRightMargin = this.decreaseRightMargin.bind(this);
    this.increaseTopMargin = this.increaseTopMargin.bind(this);
    this.decreaseTopMargin = this.decreaseTopMargin.bind(this);
    this.increaseBottomMargin = this.increaseBottomMargin.bind(this);
    this.decreaseBottomMargin = this.decreaseBottomMargin.bind(this);
  }

  handleHeight (e) {
    this.props.updateHeight(e.target.value);
  }

  heightCheck() {
    return this.props.height.split("vh")[0]
  }

  increaseLeftMargin() {
    this.props.changeMargin(5, "Left")
  }

  decreaseLeftMargin() {
    this.props.changeMargin(-5, "Left")
  }

  increaseRightMargin() {
    this.props.changeMargin(5, "Right")
  }

  decreaseRightMargin() {
    this.props.changeMargin(-5, "Right")
  }

  increaseTopMargin() {
    this.props.changeMargin(5, "Top")
  }

  decreaseTopMargin() {
    this.props.changeMargin(-5, "Top")
  }

  increaseBottomMargin() {
    this.props.changeMargin(5, "Bottom")
  }

  decreaseBottomMargin() {
    this.props.changeMargin(-5, "Bottom")
  }



  render () {
    return (
      <div className="textInput">
        <p>Change image size: </p>
        <input id="imageInput" type="text" defaultValue={this.heightCheck()} onChange={this.handleHeight}/>vh
        <Positioning changeAlignment={this.props.changeAlignment} increaseLeftMargin={this.increaseLeftMargin} decreaseLeftMargin = {this.decreaseLeftMargin}
        increaseRightMargin={this.increaseRightMargin} decreaseRightMargin={this.decreaseRightMargin}
        increaseTopMargin={this.increaseTopMargin} decreaseTopMargin = {this.decreaseTopMargin}
        increaseBottomMargin={this.increaseBottomMargin} decreaseBottomMargin = {this.decreaseBottomMargin} />
      </div>
    )
  }

}

export default ImageMenu
