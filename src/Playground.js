import React, { Component } from 'react';
import Popup from 'react-popup';
import Container from './Container';
import Menu from '../src/Menu'
import '../public/css/Playground.css';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {color: "white", divs: []}
    this.choices = this.choices.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.addChildDiv = this.addChildDiv.bind(this);
    this.renderDiv = this.renderDiv.bind(this);
  }

  renderDiv() {
    return this.state.divs.map(div=> (
      <Container color={this.state.color} />
    ))
  }

  addChildDiv() {
    this.setState({ divs: [...this.state.divs, "div"]});
  }

  choices() {
    const here = this
    Popup.create({
      content: <Menu value={here.state.color} onDrag={here.onDrag} addChildDiv={here.addChildDiv}/>
    })
  }

  onDrag(color) {
    this.setState({
      color: color
    })
  }

  render () {
    return (
      <div className="playground" onClick={ this.choices } style={{backgroundColor: this.state.color}}>
        Playground goes here
        {this.renderDiv()}
      </div>
    );
  }

}

export default Playground;
