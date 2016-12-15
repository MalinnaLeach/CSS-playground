import React, { Component } from 'react';
import Dropdown from '../src/Dropdown';

class Positioning extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="Positioning">
        <h3>Container alignment:</h3>
        <Dropdown items={["centre", "left", "right"]} eventHandler={this.props.changeAlignment} />
        <h3>Adjust space to the left:</h3>
        <button id="+lm" onClick={() => {this.props.changeMargin(5, "Left")}}>+</button>
        <button id="-lm" onClick={() => {this.props.changeMargin(-5, "Left")}}>-</button>
        <h3>Adjust space to the right:</h3>
        <button id="+rm" onClick={() => {this.props.changeMargin(5, "Right")}}>+</button>
        <button id="-rm" onClick={() => {this.props.changeMargin(-5, "Right")}}>-</button>
        <h3>Adjust space above:</h3>
        <button id="+tm" onClick={() => {this.props.changeMargin(5, "Top")}}>+</button>
        <button id="-tm" onClick={() => {this.props.changeMargin(-5, "Top")}}>-</button>
        <h3>Adjust space below:</h3>
        <button id="+bm" onClick={() => {this.props.changeMargin(5, "Bottom")}}>+</button>
        <button id="-bm" onClick={() => {this.props.changeMargin(-5, "Bottom")}}>-</button>
      </div>
    )
  }


}

export default Positioning;
