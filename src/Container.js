import React, { Component } from 'react';
import Popup from 'react-popup';
import Menu from '../src/Menu'
import cssModule from '../src/cssModule'
import '../public/css/Container.css';


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {className: this.props.className, style: this.props.style, containers: [] }
    this.showMenu = this.showMenu.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.addChildDiv = this.addChildDiv.bind(this);
    this.renderDiv = this.renderDiv.bind(this);
  }

  componentDidMount() {
    this.updateCssModule();
  };

  updateCssModule() {
    cssModule[this.state.className] = this.state.style;
    this.props.updateCssViewer();
  }

  renderDiv() {
    return this.state.containers.map(div => (
      <Container key={div} className={div} updateCssViewer={this.props.updateCssViewer} parent={this.state.className} style={{backgroundColor: "inherit", float: "left", width: "50%", height: "50%", border: "3px solid #000"}}/>
    ))
  }

  addChildDiv(className) {
    cssModule[className] = {}
    this.setState({ containers: [...this.state.containers, className]});
    this.props.updateCssViewer()
  }

  showMenu() {
    const here = this
    Popup.create({
      content: <Menu value={here.state.color} onDrag={here.onDrag} addChildDiv={here.addChildDiv}/>
    })
  }

  onDrag(color) {
    this.state.style["backgroundColor"] = color;
    cssModule[this.state.className]["backgroundColor"] = color;
    this.props.updateCssViewer();
  }

  render () {
    return (
      <div className={this.state.className} onClick={this.showMenu} style={this.state.style} >
        {this.renderDiv()}
      </div>
    );
  }

}

export default Container;
