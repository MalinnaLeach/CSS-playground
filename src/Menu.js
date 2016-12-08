import React, { Component } from 'react';
import ColorPicker from 'react-color-picker';
import 'react-color-picker/index.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'white'};
  }

  render () {
    return (
      <div className="menu">
        <ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)}/>
        <div style={{
         background: this.state.color,
         width: 100,
         height: 50,
         color: 'white'
       }}>
         {this.state.color}
       </div>
      </div>
    );
  }

  onDrag (color, c) {
    this.props.onDrag(color);
    this.setState({color: color});
  }

}


export default Menu;
