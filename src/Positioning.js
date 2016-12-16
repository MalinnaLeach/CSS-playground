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
        <div id="containerAlignment" className="settingPosition">
          <h5>Alignment:</h5>
          <Dropdown className="dropdown" items={["Centre", "Left", "Right"]} eventHandler={this.props.changeAlignment} />
        </div>
        <div>
          <div id="leftright">
            <div id="leftSpace" className="settingPosition">
              <h5>Space to left:</h5>
              <button id="+lm" className="resize" onClick={() => {this.props.changeMargin(5, "Left")}}>+</button>
              <button id="-lm" className="resize" onClick={() => {this.props.changeMargin(-5, "Left")}}>-</button>
            </div>
            <div id="rightSpace" className="settingPosition">
              <h5>Space to right:</h5>
              <button id="+rm" className="resize" onClick={() => {this.props.changeMargin(5, "Right")}}>+</button>
              <button id="-rm" className="resize" onClick={() => {this.props.changeMargin(-5, "Right")}}>-</button>
            </div>
          </div>
          <div id="updown">
            <div id="upSpace" className="settingPosition">
              <h5>Space above:</h5>
              <button id="+tm" className="resize" onClick={() => {this.props.changeMargin(5, "Top")}}>+</button>
              <button id="-tm" className="resize" onClick={() => {this.props.changeMargin(-5, "Top")}}>-</button>
            </div>
            <div id="downSpace" className="settingPosition">
              <h5>Space below:</h5>
              <button id="+bm" className="resize" onClick={() => {this.props.changeMargin(5, "Bottom")}}>+</button>
              <button id="-bm" className="resize" onClick={() => {this.props.changeMargin(-5, "Bottom")}}>-</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Positioning;
