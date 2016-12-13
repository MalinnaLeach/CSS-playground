import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import TextMenu from "./TextMenu"

class AddText extends Component {
  constructor(props) {
    super(props);
    this.state = {textType: props.textType, content: "Click here to edit text"}
    this.renderTextType = this.renderTextType.bind(this)
    this.updateText = this.updateText.bind(this)
    this.showTextMenu = this.showTextMenu.bind(this)
    this.setContent = this.setContent.bind(this)
  }

  renderTextType () {
    if (this.props.textType === "h1") {
      return <h1 className="h1"> {this.state.content} </h1>
    } else {
      return <p className="p"> {this.state.content} </p>
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
      content: <TextMenu updateText={here.updateText} content={here.setContent()}/>,
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

}

export default AddText;
