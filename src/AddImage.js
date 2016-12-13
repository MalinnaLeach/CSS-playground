import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
// import TextMenu from "./TextMenu"

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {imageUrl: props.imageUrl}
    // this.renderTextType = this.renderTextType.bind(this)
    // this.updateText = this.updateText.bind(this)
    // this.showTextMenu = this.showTextMenu.bind(this)
    // this.setContent = this.setContent.bind(this)
  }


  render () {
    return (
      <div className="AddImage" onClick={this.showTextMenu}>
        <img src={this.state.imageUrl} />
      </div>
    )
  }

  }

  export default AddImage;
