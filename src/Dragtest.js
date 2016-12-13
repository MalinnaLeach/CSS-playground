import React, { Component } from 'react';
import Draggable from 'react-draggable';

class Dragtest extends Component {
 constructor() {
  super();
  this.state = this.getInitialState();
  this.getInitialState = this.getInitialState.bind(this);
  this.handleDrag = this.handleDrag.bind(this);
  this.onStart = this.onStart.bind(this);
  this.onStop = this.onStop.bind(this);
  this.adjustXPos = this.adjustXPos.bind(this);
  this.adjustYPos = this.adjustYPos.bind(this);
  this.onControlledDrag = this.onControlledDrag.bind(this);
  this.onControlledDragStop = this.onControlledDragStop.bind(this);
 }


render() {
      const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
      const {deltaPosition, controlledPosition} = this.state;
      return (
      <Draggable handle="strong" {...dragHandlers}>
            <div className="box no-cursor">
              <strong className="cursor"><div>Drag here</div></strong>
              <div>You must click my handle to drag me</div>
            </div>
          </Draggable>
        );
      }

      getInitialState() {
        return {
          activeDrags: 0,
          deltaPosition: {
            x: 0, y: 0
          },
          controlledPosition: {
            x: -400, y: 200
          }
        };
      }

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

};

export default Dragtest;
