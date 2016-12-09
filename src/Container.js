import React, { Component } from 'react';
import Popup from 'react-popup';
import '../public/css/Container.css';
import Menu from '../src/Menu'

class Container extends Component {
  constructor(props) {
    super(props);
    this.onDrag = this.onDrag.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.state = {color: "white", divs: []};
    this.addChildDiv = this.addChildDiv.bind(this);
  };

  render () {
    return (
      <div
        className="container"
        style={ {backgroundColor: this.state.color} }
        onClick={this.showMenu}
        >
        {this.renderDiv()}
      </div>
    );
  }

  renderDiv() {
    return this.state.divs.map(div => (
      <Container color={this.state.color} />
    ))
  }

  addChildDiv() {
    this.setState({ divs: [...this.state.divs, "div"]});
  }

  showMenu () {
    const here = this;
    Popup.create({
      content: <Menu value={here.state.color} onDrag={here.onDrag} addChildDiv={here.addChildDiv}/>
    })
  };

  onDrag(color) {
    this.setState({
      color: color
    })
  }


}

export default Container;
