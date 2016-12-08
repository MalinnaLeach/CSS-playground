import React, { Component } from 'react';
import Header from './Header';
import Playground from './Playground';
import CSSViewer from './CSSViewer';
import '../public/css/App.css';
import ColorPicker from 'react-color-picker';
import 'react-color-picker/index.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {divs: 0, color: "red"};
    this.addChildDiv = this.addChildDiv.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }

  render () {
  return (
    <div className="App">
      <Header />
      <Playground divCount = {this.state.divs} color = {this.state.color}/>
      <CSSViewer />
    </div>
    );
  };

  addChildDiv() {
    this.setState({ divs: 1});
  }

  changeColor() {
    this.setState({color: "blue"})
  }
}

export default App;
