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
    this.increaseLeftMargin = this.increaseLeftMargin.bind(this);
    this.decreaseLeftMargin = this.decreaseLeftMargin.bind(this);
    this.increaseRightMargin = this.increaseRightMargin.bind(this);
    this.decreaseRightMargin = this.decreaseRightMargin.bind(this);
    this.increaseTopMargin = this.increaseTopMargin.bind(this);
    this.decreaseTopMargin = this.decreaseTopMargin.bind(this);
    this.increaseBottomMargin = this.increaseBottomMargin.bind(this);
    this.decreaseBottomMargin = this.decreaseBottomMargin.bind(this);
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
      content: <ImageMenu updateHeight={here.updateHeight} height={here.setHeight()} changeAlignment={here.changeAlignment} increaseLeftMargin={here.increaseLeftMargin} decreaseLeftMargin={here.decreaseLeftMargin} increaseRightMargin={here.increaseRightMargin} decreaseRightMargin={here.decreaseRightMargin}
      increaseTopMargin={here.increaseTopMargin} decreaseTopMargin={here.decreaseTopMargin} increaseBottomMargin={here.increaseBottomMargin}
      decreaseBottomMargin={here.decreaseBottomMargin} />,
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
    this.props.updateCssViewer();
  }

  increaseLeftMargin() {
    if (!!this.state.style["marginLeft"]) {
      var margin = parseInt((this.state.style["marginLeft"].split("%"))[0]);
      this.state.style["marginLeft"] = String((margin + 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginLeft"] = "5%"
      this.props.updateCssViewer();
    }
  }

  decreaseLeftMargin() {
    if (!!this.state.style["marginLeft"]) {
      var margin = parseInt((this.state.style["marginLeft"].split("%"))[0]);
      this.state.style["marginLeft"] = String((margin - 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginLeft"] = "-5%"
      this.props.updateCssViewer();
    }
  }

  increaseRightMargin() {
    if (!!this.state.style["marginRight"]) {
      var margin = parseInt((this.state.style["marginRight"].split("%"))[0]);
      this.state.style["marginRight"] = String((margin + 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginRight"] = "5%"
      this.props.updateCssViewer();
    }
  }

  decreaseRightMargin() {
    if (!!this.state.style["marginRight"]) {
      var margin = parseInt((this.state.style["marginRight"].split("%"))[0]);
      this.state.style["marginRight"] = String((margin - 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginRight"] = "-5%"
      this.props.updateCssViewer();
    }
  }

  increaseTopMargin() {
    if (!!this.state.style["marginTop"]) {
      var margin = parseInt((this.state.style["marginTop"].split("%"))[0]);
      this.state.style["marginTop"] = String((margin + 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginTop"] = "5%"
      this.props.updateCssViewer();
    }
  }

  decreaseTopMargin() {
    if (!!this.state.style["marginTop"]) {
      var margin = parseInt((this.state.style["marginTop"].split("%"))[0]);
      this.state.style["marginTop"] = String((margin - 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginTop"] = "-5%"
      this.props.updateCssViewer();
    }
  }

  increaseBottomMargin() {
    if (!!this.state.style["marginBottom"]) {
      var margin = parseInt((this.state.style["marginBottom"].split("%"))[0]);
      this.state.style["marginBottom"] = String((margin + 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginBottom"] = "5%"
      this.props.updateCssViewer();
    }
  }

  decreaseBottomMargin() {
    if (!!this.state.style["marginBottom"]) {
      var margin = parseInt((this.state.style["marginBottom"].split("%"))[0]);
      this.state.style["marginBottom"] = String((margin - 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginBottom"] = "-5%"
      this.props.updateCssViewer();
    }
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
