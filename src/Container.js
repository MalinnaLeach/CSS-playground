import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import Menu from './Menu'
import AddText from './AddText'
import cssModule from './cssModule'
import '../public/css/Container.css';
import Draggable from 'react-draggable';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className,
      style: this.props.style,
      containers: [],
      text: [],
      activeDrags: 0,
      deltaPosition: {x: 0, y: 0},
      controlledPosition: {x: -400, y: 200}
    }
    this.showMenu = this.showMenu.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.addChildDiv = this.addChildDiv.bind(this);
    this.renderDiv = this.renderDiv.bind(this);
    this.addChildText = this.addChildText.bind(this);
    this.increaseBorderWidth = this.increaseBorderWidth.bind(this);
    this.decreaseBorderWidth = this.decreaseBorderWidth.bind(this);
    this.changeBorderStyle = this.changeBorderStyle.bind(this);
    this.setDivWidth = this.setDivWidth.bind(this);
    this.setDivHeight = this.setDivHeight.bind(this);
    this.changeAlignment = this.changeAlignment.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.adjustXPos = this.adjustXPos.bind(this);
    this.adjustYPos = this.adjustYPos.bind(this);
    this.onControlledDrag = this.onControlledDrag.bind(this);
    this.onControlledDragStop = this.onControlledDragStop.bind(this);
  }

  eventLogger = (e: MouseEvent, data: Object) => {
      console.log('Event: ', event);
      console.log('Data: ', data);
    };

  render () {
    return (

      <div className={this.state.className} onClick={this.showMenu} style={this.state.style} >
        {this.renderDiv()}
        {this.renderText()}
      </div>

    );
  }

  showMenu(e) {
    const here = this
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const deltaPosition = this.state.deltaPosition;
    const controlledPosition = this.state.controlledPosition;
    Popup.create({
      content:
      <Draggable
      axis="x"
              handle=".handle"
              defaultPosition={{x: 0, y: 0}}
              position={null}
              grid={[25, 25]}
              zIndex={100}
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
      >
      <span>
      <Menu
      value={here.state.color}
      onDrag={here.onDrag}
      increaseBorderWidth={here.increaseBorderWidth}
      decreaseBorderWidth={here.decreaseBorderWidth}
      setDivWidth={here.setDivWidth}
      setDivHeight={here.setDivHeight}
      changeBorderStyle={here.changeBorderStyle}
      changeAlignment={here.changeAlignment}
      addChildDiv={here.addChildDiv}
      addChildText={here.addChildText} />
      </span>
      </Draggable>,

      buttons: {
        right: ['ok']
      }
    })
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  renderDiv() {
    return this.state.containers.map(div => (
      <Container
      key={div}
      className={div}
      updateCssViewer={this.props.updateCssViewer}
      parent={this.state.className}
      style={{backgroundColor: "inherit", float: "left", width: "50%", height: "50%", borderWidth: "3px", borderStyle: "solid", borderColor: "#000"}}/>
    ))
  }

  renderText() {
    return this.state.text.map((text, index) => (
      <AddText
      key={index}
      textType={text} />
    ))
  }

  addChildDiv(className) {
    cssModule[className] = {}
    this.setState({ containers: [...this.state.containers, className]});
    this.props.updateCssViewer()
  }

  addChildText(textType) {
    this.setState({ text: [...this.state.text, textType]});
  }


///////////////////// CSS ALTERATION FUNCTIONS ////////////////////////
  onDrag(color) {
    this.state.style["backgroundColor"] = color;
    cssModule[this.state.className]["backgroundColor"] = color;
    this.props.updateCssViewer();
  }

  increaseBorderWidth() {
    var thickness = parseInt((this.state.style["borderWidth"].split("px"))[0]);
    this.state.style["borderWidth"] = String((thickness + 1)) + "px"
    this.props.updateCssViewer();
  }

  decreaseBorderWidth() {
    var thickness = parseInt((this.state.style["borderWidth"].split("px"))[0]);
    this.state.style["borderWidth"] = String((thickness - 1)) + "px"
    this.props.updateCssViewer();
  }

  changeBorderStyle(style) {
    this.state.style["borderStyle"] = style;
    this.props.updateCssViewer();
  }

  setDivWidth(width) {
    this.state.style["width"] = width;
    this.props.updateCssViewer();
  }

  setDivHeight(height) {
    this.state.style["height"] = height;
    this.props.updateCssViewer();
  }

  changeAlignment(alignment) {
    this.state.style["float"] = alignment
    this.props.updateCssViewer();
  }
///////////////////////////////////////////////////////////////////////

  updateCssModule() {
    cssModule[this.state.className] = this.state.style;
    this.props.updateCssViewer();
  }

  componentDidMount() {
    this.updateCssModule();
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

export default Container;
