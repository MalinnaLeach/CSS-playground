import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import CSSViewer from './CSSViewer';
import HTMLViewer from './HTMLViewer';
import '../public/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'css'
    };
    this.updateCssViewer = this.updateCssViewer.bind(this);
    this.updateView = this.updateView.bind(this);
  }

  updateView(input) {
    this.setState({
      view: input
    })
  }

  render () {
  return (
    <div className="App">
      <Header updateView={this.updateView}/>
      <Container key="background" className="background" style={{backgroundColor: "white", height: "100vh", textAlign: "center"}} updateCssViewer={this.updateCssViewer}/>
      <CSSViewer />
    </div>
    );
  };

  updateCssViewer() {
    this.forceUpdate();
  }
}

export default App;
