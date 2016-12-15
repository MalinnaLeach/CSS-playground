import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import TextMenu from "./TextMenu"
import cssModule from './cssModule'
import htmlModule from './htmlModule'

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
    this.changeFontSize = this.changeFontSize.bind(this);
    this.htmlUpdateContent = this.htmlUpdateContent.bind(this);
  }

  changeAlignment(alignment) {
    if (alignment === "centre") {
      delete this.state.style.float
    } else {
      this.state.style["float"] = alignment
    }
    this.props.rerenderWholeApp();
  }

  changeFontSize(size) {
    this.state.style["fontSize"] = size + "px"
    this.props.rerenderWholeApp();
  }

  increaseLeftMargin() {
    if (!!this.state.style["marginLeft"]) {
      var margin = parseInt((this.state.style["marginLeft"].split("%"))[0]);
      this.state.style["marginLeft"] = String((margin + 5)) + "%"
      this.props.rerenderWholeApp();
    } else {
      this.state.style["marginLeft"] = "5%"
      this.props.rerenderWholeApp();
    }
  }

  decreaseLeftMargin() {
    if (!!this.state.style["marginLeft"]) {
      var margin = parseInt((this.state.style["marginLeft"].split("%"))[0]);
      this.state.style["marginLeft"] = String((margin - 5)) + "%"
      this.props.rerenderWholeApp();
    } else {
      this.state.style["marginLeft"] = "-5%"
      this.props.rerenderWholeApp();
    }
  }

  increaseRightMargin() {
    if (!!this.state.style["marginRight"]) {
      var margin = parseInt((this.state.style["marginRight"].split("%"))[0]);
      this.state.style["marginRight"] = String((margin + 5)) + "%"
      this.props.rerenderWholeApp();
    } else {
      this.state.style["marginRight"] = "5%"
      this.props.rerenderWholeApp();
    }
  }

  decreaseRightMargin() {
    if (!!this.state.style["marginRight"]) {
      var margin = parseInt((this.state.style["marginRight"].split("%"))[0]);
      this.state.style["marginRight"] = String((margin - 5)) + "%"
      this.props.rerenderWholeApp();
    } else {
      this.state.style["marginRight"] = "-5%"
      this.props.rerenderWholeApp();
    }
  }

  increaseTopMargin() {
    if (!!this.state.style["marginTop"]) {
      var margin = parseInt((this.state.style["marginTop"].split("%"))[0]);
      this.state.style["marginTop"] = String((margin + 5)) + "%"
      this.props.rerenderWholeApp();
    } else {
      this.state.style["marginTop"] = "5%"
      this.props.rerenderWholeApp();
    }
  }

  decreaseTopMargin() {
    if (!!this.state.style["marginTop"]) {
      var margin = parseInt((this.state.style["marginTop"].split("%"))[0]);
      this.state.style["marginTop"] = String((margin - 5)) + "%"
      this.props.rerenderWholeApp();
    } else {
      this.state.style["marginTop"] = "-5%"
      this.props.rerenderWholeApp();
    }
  }

  increaseBottomMargin() {
    if (!!this.state.style["marginBottom"]) {
      var margin = parseInt((this.state.style["marginBottom"].split("%"))[0]);
      this.state.style["marginBottom"] = String((margin + 5)) + "%"
      this.props.rerenderWholeApp();
    } else {
      this.state.style["marginBottom"] = "5%"
      this.props.rerenderWholeApp();
    }
  }

  decreaseBottomMargin() {
    if (!!this.state.style["marginBottom"]) {
      var margin = parseInt((this.state.style["marginBottom"].split("%"))[0]);
      this.state.style["marginBottom"] = String((margin - 5)) + "%"
      this.props.rerenderWholeApp();
    } else {
      this.state.style["marginBottom"] = "-5%"
      this.props.rerenderWholeApp();
    }
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
    this.htmlUpdateContent(htmlModule[0].children, text)
    this.props.rerenderWholeApp();
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
      content: <TextMenu updateText={here.updateText} content={here.setContent()} fontSize={here.state.style.fontSize} changeAlignment={here.changeAlignment} increaseLeftMargin={here.increaseLeftMargin}
      decreaseLeftMargin={here.decreaseLeftMargin} increaseRightMargin={here.increaseRightMargin} decreaseRightMargin={here.decreaseRightMargin}
      increaseTopMargin={here.increaseTopMargin} decreaseTopMargin={here.decreaseTopMargin} increaseBottomMargin={here.increaseBottomMargin}
      decreaseBottomMargin={here.decreaseBottomMargin} changeFontSize={here.changeFontSize}/>,
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

  htmlUpdate(array, parent, name) {
    for (var object of array) {
      if (object.class === parent) {
        object.children.push({class: name, type: this.props.textType, content: this.state.content, children: []})
      } else if (object.children !== []) {
        this.htmlUpdate(object.children, parent, name)
      }
    }
  }

  htmlUpdateContent(array, text) {
    for (var object of array) {
      if (object.class === this.props.className) {
        object.content = text
      } else {
        if (object.children !== []) {
          this.htmlUpdateContent(object.children, text)
        }
      }
    }
  }

  updateCssModule() {
    cssModule[this.props.className] = this.state.style;
  }

  componentDidMount() {
    this.updateCssModule();
    this.htmlUpdate(htmlModule[0].children, this.props.parent, this.props.className)
    this.props.rerenderWholeApp();
  };

}

export default AddText;
