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
          <button id="+lm" className="resizebutton" onClick={this.props.increaseLeftMargin}>+</button>
          <button id="-lm" className="resizebutton" onClick={this.props.decreaseLeftMargin}>-</button>
        </div>
        <div className="settingPosition">
          <h5>Adjust space to the right:</h5>
          <button id="+rm" className="resizebutton" onClick={this.props.increaseRightMargin}>+</button>
          <button id="-rm" className="resizebutton" onClick={this.props.decreaseRightMargin}>-</button>
        </div>
        <div className="settingPosition">
          <h5>Adjust space above:</h5>
          <button id="+tm" className="resizebutton" onClick={this.props.increaseTopMargin}>+</button>
          <button id="-tm" className="resizebutton" onClick={this.props.decreaseTopMargin}>-</button>
        </div>
        <div className="settingPosition">
          <h5>Adjust space below:</h5>
          <button id="+bm" className="resizebutton" onClick={this.props.increaseBottomMargin}>+</button>
          <button id="-bm" className="resizebutton" onClick={this.props.decreaseBottomMargin}>-</button>
        </div>
      </div>
    )
  }


}

export default Positioning;
