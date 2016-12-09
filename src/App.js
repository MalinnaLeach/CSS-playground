import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import CSSViewer from './CSSViewer';
import '../public/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { bgStyle: {float: "left", backgroundColor: "white"} };
    this.addChildDiv = this.addChildDiv.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.updateCssViewer = this.updateCssViewer.bind(this)
  }

  render () {
  return (
    <div className="App">
      <Header />
      <Container key="background" className="background" style={this.state.bgStyle} updateCssViewer={this.updateCssViewer}/>
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

  updateCssViewer() {
    this.forceUpdate();
  }
}

export default App;
