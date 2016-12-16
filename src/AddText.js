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
    this.updateText = this.updateText.bind(this);
    this.showTextMenu = this.showTextMenu.bind(this);
    this.setContent = this.setContent.bind(this);
    this.changeAlignment = this.changeAlignment.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
    this.htmlUpdateContent = this.htmlUpdateContent.bind(this);
    this.changeMargin = this.changeMargin.bind(this);
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

  changeMargin(size, dimension) {
    if (!!this.state.style["margin" + dimension]) {
      var margin = parseInt((this.state.style["margin" + dimension].split("%"))[0]);
      this.state.style["margin" + dimension] = String((margin + size)) + "%"
      this.props.rerenderWholeApp();
    } else {
      this.state.style["margin" + dimension] = String(size) + "%"
      this.props.rerenderWholeApp();
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
    } else {
      return this.state.content
    }
  }

  showTextMenu (e) {
    const here = this
    Popup.create({
      content: <TextMenu updateText={here.updateText} content={here.setContent()}
      fontSize={here.state.style.fontSize} changeAlignment={here.changeAlignment}
      changeFontSize={here.changeFontSize} changeMargin={here.changeMargin}/>,
      buttons: {right:['ok']}
    })
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  render () {
    return (
      <div className="AddText" onClick={this.showTextMenu}>
        <this.props.textType className={this.props.className} style={this.state.style}> {this.state.content} </this.props.textType>
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

  componentDidMount() {
    cssModule[this.props.className] = this.state.style;
    this.htmlUpdate(htmlModule, this.props.parent, this.props.className)
    this.props.rerenderWholeApp();
  };

}

export default AddText;
