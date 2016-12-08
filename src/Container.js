import React, { Component } from 'react';
import Popup from 'react-popup';
import '../public/css/Container.css';
import Menu from '../src/Menu'

class Container extends Component {
  constructor(props) {
    super(props);
    this.onDrag = this.onDrag.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.state = {color: "white"  };
  };

  render () {
    return (
      <div
        className="container"
        style={ {backgroundColor: this.state.color} }
        onClick={this.showMenu}
        >
      </div>
    );
  }

  showMenu () {
    const here = this;
    Popup.create({
      content: <Menu value={here.state.color} onDrag={here.onDrag}/>
    })
  };

  onDrag(color) {
    this.setState({
      color: color
    })
  }


}

export default Container;
