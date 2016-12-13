import React, { Component } from 'react';
import ColorPicker from 'react-color-picker';
import 'react-color-picker/index.css'
import Dropdown from '../src/Dropdown';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'white', className: '', activeDrags: 0,
    deltaPosition: {x: 0, y: 0},
    controlledPosition: {x: -400, y: 200}};
    this.handleClassName = this.handleClassName.bind(this);
    this.handleNewDiv = this.handleNewDiv.bind(this);
    this.handleNewTitle = this.handleNewTitle.bind(this);
    this.handleNewParagraph = this.handleNewParagraph.bind(this);
    this.increaseBorderWidth = this.increaseBorderWidth.bind(this);
    this.decreaseBorderWidth = this.decreaseBorderWidth.bind(this);
    this.setDivWidth = this.setDivWidth.bind(this);
    this.setDivHeight = this.setDivHeight.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.adjustXPos = this.adjustXPos.bind(this);
    this.adjustYPos = this.adjustYPos.bind(this);
    this.onControlledDrag = this.onControlledDrag.bind(this);
    this.onControlledDragStop = this.onControlledDragStop.bind(this);
    }

  render () {

    var colourBoxStyle = {background: this.state.color, width: 100, height: 50, color: 'white', borderWidth: "3px", borderStyle: "solid", borderColor: "#000"}
    return (
      <div className="menu">
      <ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)}/>
      <div style={colourBoxStyle}>
        {this.state.color}
      </div>
      <input id="classInput" type="text" name="className" placeholder="Div class name" onChange={this.handleClassName}/>
      <button id="newDiv" onClick={this.handleNewDiv}>Create new div</button>
      <form>
        Width:
        <input type="text" name="width" />
        Height:
        <input type="text" name="height" />
        <input type="submit" value="Update size" />
      </form>
      <button id="newTitle" onClick={this.handleNewTitle}>Add title</button>
      <button id="newParagraph" onClick={this.handleNewParagraph}>Add paragraph</button>
      <h3>Change border width:</h3>
      <button id="increase" onClick={this.increaseBorderWidth}>+</button>
      <button id="decrease" onClick={this.decreaseBorderWidth}>-</button>
      <h3>Select your border style:</h3>
      <Dropdown items={["solid", "dashed", "dotted"]} eventHandler={this.props.changeBorderStyle}/>
      <h3>Container alignment:</h3>
      <Dropdown items={["left", "right", "center"]} eventHandler={this.props.changeAlignment}/>
      </div>
    );
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

  setDivWidth(width) {
    this.props.setDivWidth(width);
  }

  setDivHeight(height) {
    this.props.setDivHeight(height);
  }

  //////////////////////////DRAG FUNCTIONS//////////////////
  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  }

  onStart() {
    this.setState({activeDrags: ++this.state.activeDrags});
  }

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }

  // For controlled component
  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  }

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  }

  onControlledDrag(e, position) {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  }

  onControlledDragStop(e, position) {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  }
  //////////////////////////////////////////////////////////


}

export default Menu;
