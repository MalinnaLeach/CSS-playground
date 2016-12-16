import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import ImageMenu from "./ImageMenu"
import cssModule from './cssModule'
import htmlModule from './htmlModule'

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {imageUrl: props.imageUrl, style: {height: props.height}}
    this.updateHeight = this.updateHeight.bind(this)
    this.showImageMenu = this.showImageMenu.bind(this)
    this.setHeight = this.setHeight.bind(this)
    this.changeAlignment = this.changeAlignment.bind(this);
    this.changeMargin = this.changeMargin.bind(this);
  }

  setHeight() {
    return this.state.style.height
  }

  updateHeight(height) {
    this.state.style.height = String(height) + "vh"
    this.props.rerenderWholeApp();
  }


  showImageMenu (e) {
    const here = this
    Popup.create({
      content: <ImageMenu updateHeight={here.updateHeight} height={here.setHeight()} changeAlignment={here.changeAlignment} changeMargin={here.changeMargin}/>,
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
    this.props.rerenderWholeApp();
  }

  changeMargin(size, dimension) {
    if (!!this.state.style["margin" + dimension]) {
      var margin = parseInt((this.state.style["margin" + dimension].split("%"))[0]);
      this.state.style["margin" + dimension] = String((margin + size)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["margin" + dimension] = String(size) + "%"
      this.props.updateCssViewer();
    }
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
    this.updateCssModule();
  };

  updateCssModule() {
    cssModule[this.props.className] = this.state.style;
    this.props.rerenderWholeApp();
  }

  render () {
    return (
      <div className="AddImage" onClick={this.showImageMenu}>
        <img src={this.state.imageUrl} style={this.state.style} />
      </div>
    )
  }

  }

  export default AddImage;
