import React, { Component } from 'react';
import Positioning from './Positioning';
import '../public/css/Menu.css';

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
      <div className="imagesize">
          <h3>Image</h3>
          <h5>Change image size:</h5>
          <input id="imageInput" type="text" defaultValue={this.heightCheck()} onChange={this.handleHeight}/>vh
        </div>
        <Positioning changeAlignment={this.props.changeAlignment} changeMargin={this.props.changeMargin} />
      </div>
    )
  }

}

export default ImageMenu
