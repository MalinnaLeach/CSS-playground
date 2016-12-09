import React, { Component } from 'react';
import Popup from 'react-popup';
import Container from './Container';
import Menu from '../src/Menu'
import cssModule from '../src/cssModule'
import '../public/css/Playground.css';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {className: "playground", style: {backgroundColor: "#fff"}, divs: []}
    this.showMenu = this.showMenu.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.addChildDiv = this.addChildDiv.bind(this);
    this.renderDiv = this.renderDiv.bind(this);
  }

  renderDiv() {
    return this.state.divs.map(div => (
      <Container color={this.state.color} />
    ))
  }

  addChildDiv() {
    this.setState({ divs: [...this.state.divs, "div"]});
  }

  showMenu() {
    const here = this
    Popup.create({
      content: <Menu value={here.state.color} onDrag={here.onDrag} addChildDiv={here.addChildDiv}/>
    })
  }

  onDrag(color) {
    this.setState({
      style: {backgroundColor: color}
    }, () => {
      cssModule[this.state.className] = this.state.style
      this.props.updateCssViewer()
    });
  }

  render () {
    return (
      <div className="playground" onClick={ this.showMenu } style={this.state.style}>
        Playground goes here
        {this.renderDiv()}
      </div>
    );
  }

}

export default Playground;
