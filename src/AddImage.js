import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import ImageMenu from "./ImageMenu"
import htmlModule from './htmlModule'

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

  htmlUpdate(array, parent, name) {
    for (var object of array) {
      if (object.class === parent) {
        object.children.push({class: name, type: "img", src: this.state.imageUrl, children: []})
      } else if (object.children !== []) {
        this.htmlUpdate(object.children, parent, name)
      }
    }
  }

  componentDidMount() {
    this.htmlUpdate(htmlModule[0].children, this.props.parent, this.props.className)
    this.props.updateCssViewer();
  };


  render () {
    return (
      <div className="AddImage" onClick={this.showImageMenu}>
        <img src={this.state.imageUrl} height={this.state.imageHeight} />
      </div>
    )
  }

  }

  export default AddImage;
