import React, { Component } from 'react';
import Positioning from './Positioning';

class ImageMenu extends Component {
  constructor (props) {
    super(props);
    this.handleHeight = this.handleHeight.bind(this);
    this.heightCheck = this.heightCheck.bind(this);
  }

  handleHeight (e) {
    this.props.updateHeight(e.target.value);
  }

  heightCheck() {
    return this.props.height.split("vh")[0]
  }





  render () {
    return (
      <div className="textInput">
        <p>Change image size: </p>
        <input id="imageInput" type="text" defaultValue={this.heightCheck()} onChange={this.handleHeight}/>vh
        <Positioning changeAlignment={this.props.changeAlignment} changeMargin={this.props.changeMargin} />
      </div>
    )
  }

}

export default ImageMenu
