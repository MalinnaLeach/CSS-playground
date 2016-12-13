import React, { Component } from 'react';
import ColorPicker from 'react-color-picker';
import 'react-color-picker/index.css';
import Dropdown from './Dropdown';
import Positioning from './Positioning';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'white', className: ''};
    this.handleClassName = this.handleClassName.bind(this);
    this.handleNewDiv = this.handleNewDiv.bind(this);
    this.handleNewTitle = this.handleNewTitle.bind(this);
    this.handleNewParagraph = this.handleNewParagraph.bind(this);
    this.increaseBorderWidth = this.increaseBorderWidth.bind(this);
    this.decreaseBorderWidth = this.decreaseBorderWidth.bind(this);
    this.setBorderRadius = this.setBorderRadius.bind(this);
    this.setDivWidth = this.setDivWidth.bind(this);
    this.setDivHeight = this.setDivHeight.bind(this);
  }

  render () {
    var colourBoxStyle = {background: this.state.color, width: 100, height: 50, color: 'white', borderWidth: "3px", borderStyle: "solid", borderColor: "#000"}
    if (this.props.parentContainer === "background") {
      return (
        <div className="menu">
          <ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)}/>
          <div style={colourBoxStyle}>
            {this.state.color}
          </div>
          <input id="classInput" type="text" name="className" placeholder="Div class name" onChange={this.handleClassName}/>
          <button id="newDiv" onClick={this.handleNewDiv}>Create new div</button>
        </div>
      )
    } else {
      return (
        <div className="menu">
          <ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)}/>
          <div style={colourBoxStyle}>
            {this.state.color}
          </div>
          <input id="classInput" type="text" name="className" placeholder="Div class name" onChange={this.handleClassName}/>
          <button id="newDiv" onClick={this.handleNewDiv}>Create new div</button>
          <input id="divWidthInput" type="number" name="width" placeholder="Set div Width" onChange={this.setDivWidth}/>%
          <input id="divHeightInput" type="number" name="height" placeholder="Set div Height" onChange={this.setDivHeight}/>%
          <button id="newTitle" onClick={this.handleNewTitle}>Add title</button>
          <button id="newParagraph" onClick={this.handleNewParagraph}>Add paragraph</button>
          <h3>Change border width:</h3>
          <button id="increase" onClick={this.increaseBorderWidth}>+</button>
          <button id="decrease" onClick={this.decreaseBorderWidth}>-</button>
          <h3>Change border style:</h3>
          <Dropdown items={["solid", "dashed", "dotted"]} eventHandler={this.props.changeBorderStyle}/>
          <h3>Change border radius:</h3>
          <input id="borderRadius" type="number" name="radius" placeholder="Border radius" onChange={this.setBorderRadius}/>
          <h3>Change border color:</h3>
          <Dropdown items={["Black", "Dark grey", "Light grey"]} eventHandler={this.props.changeBorderColor}/>
          <Positioning changeAlignment={this.props.changeAlignment} changeRelative={this.props.changeRelative}
          increaseLeftMargin={this.props.increaseLeftMargin} decreaseLeftMargin = {this.props.decreaseLeftMargin}
          increaseRightMargin={this.props.increaseRightMargin} decreaseRightMargin={this.props.decreaseRightMargin}
          increaseTopMargin={this.props.increaseTopMargin} decreaseTopMargin = {this.props.decreaseTopMargin}
          increaseBottomMargin={this.props.increaseBottomMargin} decreaseBottomMargin = {this.props.decreaseBottomMargin} />
        </div>
      );
    }
  }


  handleNewTitle() {
    this.props.addChildText("h1");
  }

  handleNewParagraph() {
    this.props.addChildText("p");
  }

  handleClassName(e) {
    this.setState({className: e.target.value});
  }

  handleNewDiv () {
    this.props.addChildDiv(this.state.className)
  }

  onDrag (color, c) {
    this.props.onDrag(color);
    this.setState({color: color});
  }

  increaseBorderWidth () {
    this.props.increaseBorderWidth();
  }

  decreaseBorderWidth () {
    this.props.decreaseBorderWidth();
  }

  setBorderRadius(e) {
    this.props.changeBorderRadius(e.target.value);
  }

  setDivWidth(e) {
    this.props.updateDivWidth(e.target.value);
  }

  setDivHeight(e) {
    this.props.updateDivHeight(e.target.value);
  }

}

export default Menu;
