import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import TextMenu from "./TextMenu"
import cssModule from './cssModule'

class AddText extends Component {
  constructor(props) {
    super(props);
    this.state = {textType: props.textType, content: "Click here to edit text", style: {}}
    this.renderTextType = this.renderTextType.bind(this)
    this.updateText = this.updateText.bind(this)
    this.showTextMenu = this.showTextMenu.bind(this)
    this.setContent = this.setContent.bind(this)
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

  componentDidMount () {
    cssModule[this.props.className] = {float: "left"}
    this.props.updateCssViewer()
  }

  renderTextType () {
    if (this.props.textType === "h1") {
      return <h1 className={this.props.className} style={this.state.style}> {this.state.content} </h1>
    } else {
      return <p className={this.props.className} style={this.state.style}> {this.state.content} </p>
    }
  }

  updateText (text) {
    this.setState({ content: text })
  }

  setContent() {
    if (this.state.content === "Click here to edit text") {
      return ""
    } else{
      return this.state.content
    }
  }

  showTextMenu (e) {
    const here = this
    Popup.create({
      content: <TextMenu updateText={here.updateText} content={here.setContent()} changeAlignment={here.changeAlignment} increaseLeftMargin={here.increaseLeftMargin}
      decreaseLeftMargin={here.decreaseLeftMargin} increaseRightMargin={here.increaseRightMargin} decreaseRightMargin={here.decreaseRightMargin}
      increaseTopMargin={here.increaseTopMargin} decreaseTopMargin={here.decreaseTopMargin} increaseBottomMargin={here.increaseBottomMargin}
      decreaseBottomMargin={here.decreaseBottomMargin} />,
      buttons: {right:['ok']}
    })
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  render () {
    return (
      <div className="AddText" onClick={this.showTextMenu}>
        {this.renderTextType()}
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

export default AddText;
