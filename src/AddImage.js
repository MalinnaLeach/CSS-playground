import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import ImageMenu from "./ImageMenu"

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {imageUrl: props.imageUrl, imageHeight: props.height}
    this.updateHeight = this.updateHeight.bind(this)
    this.showImageMenu = this.showImageMenu.bind(this)
    this.setHeight = this.setHeight.bind(this)
  }

  setHeight() {
    return this.state.imageHeight
  }

  updateHeight(height) {
    this.setState({imageHeight: height})
  }


  showImageMenu (e) {
    const here = this
    Popup.create({
      content: <ImageMenu updateHeight={here.updateHeight} height={here.setHeight()}/>,
      buttons: {right:['ok']}
    })
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }


  render () {
    return (
      <div className="AddImage" onClick={this.showImageMenu}>
        <img src={this.state.imageUrl} height={this.state.imageHeight} />
      </div>
    )
  }

  }

  export default AddImage;
