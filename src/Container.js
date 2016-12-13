import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import Menu from './Menu'
import AddText from './AddText'
import cssModule from './cssModule'
import '../public/css/Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {className: this.props.className, style: this.props.style, containers: [], text: [] }
    this.showMenu = this.showMenu.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.addChildDiv = this.addChildDiv.bind(this);
    this.renderDiv = this.renderDiv.bind(this);
    this.addChildText = this.addChildText.bind(this);
    this.increaseBorderWidth = this.increaseBorderWidth.bind(this);
    this.decreaseBorderWidth = this.decreaseBorderWidth.bind(this);
    this.changeBorderStyle = this.changeBorderStyle.bind(this);
    this.changeBorderRadius = this.changeBorderRadius.bind(this);
    this.updateDivWidth = this.updateDivWidth.bind(this);
    this.updateDivHeight = this.updateDivHeight.bind(this);
    this.changeAlignment = this.changeAlignment.bind(this);
    this.changeRelative = this.changeRelative.bind(this);
    this.increaseLeftMargin = this.increaseLeftMargin.bind(this);
    this.decreaseLeftMargin = this.decreaseLeftMargin.bind(this);
    this.increaseRightMargin = this.increaseRightMargin.bind(this);
    this.decreaseRightMargin = this.decreaseRightMargin.bind(this);
    this.increaseTopMargin = this.increaseTopMargin.bind(this);
    this.decreaseTopMargin = this.decreaseTopMargin.bind(this);
    this.increaseBottomMargin = this.increaseBottomMargin.bind(this);
    this.decreaseBottomMargin = this.decreaseBottomMargin.bind(this);
  }

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
    Popup.create({
      content: <Menu value={here.state.color} onDrag={here.onDrag} increaseBorderWidth={here.increaseBorderWidth}
      decreaseBorderWidth={here.decreaseBorderWidth} updateDivWidth={here.updateDivWidth} updateDivHeight={here.updateDivHeight}
      changeBorderStyle={here.changeBorderStyle} changeBorderRadius={here.changeBorderRadius} changeAlignment={here.changeAlignment} addChildDiv={here.addChildDiv}
      addChildText={here.addChildText} changeRelative={here.changeRelative} increaseLeftMargin={here.increaseLeftMargin}
      decreaseLeftMargin={here.decreaseLeftMargin} increaseRightMargin={here.increaseRightMargin} decreaseRightMargin={here.decreaseRightMargin}
      increaseTopMargin={here.increaseTopMargin} decreaseTopMargin={here.decreaseTopMargin} increaseBottomMargin={here.increaseBottomMargin}
      decreaseBottomMargin={here.decreaseBottomMargin} />,
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
      <Container key={div} className={div} updateCssViewer={this.props.updateCssViewer} parent={this.state.className} style={{backgroundColor: "inherit", float: "left", width: "50%", height: "50%", borderWidth: "3px", borderStyle: "solid", borderColor: "#000", borderRadius: "0px"}}/>
    ))
  }

  renderText() {
    return this.state.text.map((text, index) => (
      <AddText key={index} textType={text} />
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

  changeBorderRadius(radius) {
    this.state.style["borderRadius"] = String(radius) + "%";
    this.props.updateCssViewer();
  }

  updateDivWidth (width) {
    this.state.style["width"] = String(width) + "%";
    this.props.updateCssViewer();
  }

  updateDivHeight (height) {
    this.state.style["height"] = String(height) + "%";
    this.props.updateCssViewer();
  }

  changeAlignment(alignment) {
    this.state.style["float"] = alignment
    this.props.updateCssViewer();
  }

  changeRelative(position) {
    if (position === "isolated") {
      this.state.style["float"] = "none"
      this.state.style["display"] = "block"
      this.props.updateCssViewer();
    } else {
      this.state.style["float"] = "left"
      this.state.style["display"] = "inline"
      this.props.updateCssViewer();
    }
  }

  increaseLeftMargin() {
    if (!!this.state.style["marginLeft"]) {
      var margin = parseInt((this.state.style["marginLeft"].split("%"))[0]);
      this.state.style["marginLeft"] = String((margin + 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginLeft"] = "5%"
      this.props.updateCssViewer();
    }
  }

  decreaseLeftMargin() {
    if (!!this.state.style["marginLeft"]) {
      var margin = parseInt((this.state.style["marginLeft"].split("%"))[0]);
      this.state.style["marginLeft"] = String((margin - 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginLeft"] = "-5%"
      this.props.updateCssViewer();
    }
  }

  increaseRightMargin() {
    if (!!this.state.style["marginRight"]) {
      var margin = parseInt((this.state.style["marginRight"].split("%"))[0]);
      this.state.style["marginRight"] = String((margin + 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginRight"] = "5%"
      this.props.updateCssViewer();
    }
  }

  decreaseRightMargin() {
    if (!!this.state.style["marginRight"]) {
      var margin = parseInt((this.state.style["marginRight"].split("%"))[0]);
      this.state.style["marginRight"] = String((margin - 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginRight"] = "-5%"
      this.props.updateCssViewer();
    }
  }

  increaseTopMargin() {
    if (!!this.state.style["marginTop"]) {
      var margin = parseInt((this.state.style["marginTop"].split("%"))[0]);
      this.state.style["marginTop"] = String((margin + 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginTop"] = "5%"
      this.props.updateCssViewer();
    }
  }

  decreaseTopMargin() {
    if (!!this.state.style["marginTop"]) {
      var margin = parseInt((this.state.style["marginTop"].split("%"))[0]);
      this.state.style["marginTop"] = String((margin - 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginTop"] = "-5%"
      this.props.updateCssViewer();
    }
  }

  increaseBottomMargin() {
    if (!!this.state.style["marginBottom"]) {
      var margin = parseInt((this.state.style["marginBottom"].split("%"))[0]);
      this.state.style["marginBottom"] = String((margin + 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginBottom"] = "5%"
      this.props.updateCssViewer();
    }
  }

  decreaseBottomMargin() {
    if (!!this.state.style["marginBottom"]) {
      var margin = parseInt((this.state.style["marginBottom"].split("%"))[0]);
      this.state.style["marginBottom"] = String((margin - 5)) + "%"
      this.props.updateCssViewer();
    } else {
      this.state.style["marginBottom"] = "-5%"
      this.props.updateCssViewer();
    }
  }

///////////////////////////////////////////////////////////////////////

  updateCssModule() {
    cssModule[this.state.className] = this.state.style;
    this.props.updateCssViewer();
  }

  componentDidMount() {
    this.updateCssModule();

  };
}

export default Container;
