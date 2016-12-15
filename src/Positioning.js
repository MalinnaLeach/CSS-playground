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
        <button id="+lm" className="resizebutton" onClick={this.props.increaseLeftMargin}>+</button>
        <button id="-lm" className="resizebutton" onClick={this.props.decreaseLeftMargin}>-</button>
        <h3>Adjust space to the right:</h3>
        <button id="+rm" className="resizebutton" onClick={this.props.increaseRightMargin}>+</button>
        <button id="-rm" className="resizebutton" onClick={this.props.decreaseRightMargin}>-</button>
        <h3>Adjust space above:</h3>
        <button id="+tm" className="resizebutton" onClick={this.props.increaseTopMargin}>+</button>
        <button id="-tm" className="resizebutton" onClick={this.props.decreaseTopMargin}>-</button>
        <h3>Adjust space below:</h3>
        <button id="+bm" className="resizebutton" onClick={this.props.increaseBottomMargin}>+</button>
        <button id="-bm" className="resizebutton" onClick={this.props.decreaseBottomMargin}>-</button>
      </div>
    )
  }


}

export default Positioning;
