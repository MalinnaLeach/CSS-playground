import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import ImageMenu from "./ImageMenu"
import cssModule from './cssModule'

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {imageUrl: props.imageUrl, imageHeight: props.height, style: {}}
    this.updateHeight = this.updateHeight.bind(this)
    this.showImageMenu = this.showImageMenu.bind(this)
    this.setHeight = this.setHeight.bind(this)
    this.changeAlignment = this.changeAlignment.bind(this);
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
      content: <ImageMenu updateHeight={here.updateHeight} changeAlignment={here.changeAlignment} height={here.setHeight()}/>,
      buttons: {right:['ok']}
    })
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  changeAlignment(alignment) {
    if (alignment === "centre") {
      delete this.state.style.float
    } else {
      this.state.style["float"] = alignment
    }
    this.forceUpdate();
    this.props.updateCssViewer();
  }


  render () {
    return (
      <div className="AddImage" onClick={this.showImageMenu}>
        <img src={this.state.imageUrl} height={this.state.imageHeight} style={this.state.style} className=""/>
      </div>
    )
  }

  updateCssModule() {
    cssModule[this.props.className] = this.state.style;
    this.props.updateCssViewer();
  }

  componentDidMount() {
    this.updateCssModule();
  };

  }

  export default AddImage;
