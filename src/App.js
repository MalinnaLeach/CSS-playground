import React, { Component } from 'react';
import Header from './Header';
import Playground from './Playground';
import ControlPanel from './ControlPanel';
import '../public/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: 0
    };
    this.addChildDiv = this.addChildDiv.bind(this)
  }

  render () {
  return (
    <div className="App">
      <Header />
      <Playground divCount = {this.state.divs}/>
      <ControlPanel addChildDiv = {this.addChildDiv}/>
    </div>
    );
  };

  addChildDiv() {
    this.setState({ divs: 1});
  }
}

export default App;
