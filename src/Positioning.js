import React, { Component } from 'react';
import Dropdown from '../src/Dropdown';

class Positioning extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="positioning">
        <h3>Layout</h3>
        <div className="settingPosition">
          <h5>Container alignment:</h5>
          <Dropdown items={["centre", "left", "right"]} eventHandler={this.props.changeAlignment} />
        </div>
        <div className="settingPosition">
          <h5>Adjust space to the left:</h5>
          <button id="+lm" onClick={() => {this.props.changeMargin(5, "Left")}}>+</button>
          <button id="-lm" onClick={() => {this.props.changeMargin(-5, "Left")}}>-</button>
        </div>
        <div className="settingPosition">
          <h5>Adjust space to the right:</h5>
          <button id="+rm" onClick={() => {this.props.changeMargin(5, "Right")}}>+</button>
          <button id="-rm" onClick={() => {this.props.changeMargin(-5, "Right")}}>-</button>
        </div>
        <div className="settingPosition">
          <h5>Adjust space above:</h5>
          <button id="+tm" onClick={() => {this.props.changeMargin(5, "Top")}}>+</button>
          <button id="-tm" onClick={() => {this.props.changeMargin(-5, "Top")}}>-</button>
        </div>
        <div className="settingPosition">
          <h5>Adjust space below:</h5>
          <button id="+bm" onClick={() => {this.props.changeMargin(5, "Bottom")}}>+</button>
          <button id="-bm" onClick={() => {this.props.changeMargin(-5, "Bottom")}}>-</button>
        </div>
      </div>
    )
  }
}

export default Positioning;
