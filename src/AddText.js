import React, { Component } from 'react';
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
      return <h1 className="h1" onClick={this.showTextMenu}> {this.state.content} </h1>
    } else {
      return <p className="p" onClick={this.showTextMenu}> {this.state.content} </p>
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

  showTextMenu () {
    const here = this
    Popup.create({
      content: <TextMenu updateText={here.updateText} content={here.setContent()}/>,
      buttons: {
        right: ['ok']
      }
    })
  }

  render () {
    return (
      <div className="AddText">
        {this.renderTextType()}
      </div>
    )
  }

}

export default AddText;
