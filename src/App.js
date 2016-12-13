import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import CSSViewer from './CSSViewer';
import '../public/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateCssViewer = this.updateCssViewer.bind(this);
  }


  render () {
  return (
    <div className="App">
      <Header />
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
