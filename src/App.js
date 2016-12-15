import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import CSSViewer from './CSSViewer';
import HTMLViewer from './HTMLViewer';
import htmlModule from './htmlModule';
import '../public/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'css'
    };
    this.updateCssViewer = this.updateCssViewer.bind(this);
    this.updateView = this.updateView.bind(this);
    this.showView = this.showView.bind(this);
  }

  updateView(input) {
    this.setState({
      view: input
    })
  }

  showView() {
    if (this.state.view === 'css') {
      return <CSSViewer />
    } else {
      return <HTMLViewer />
    }
  }

  render () {
    return (
      <div className="App">
        <Header updateView={this.updateView}/>
        <Container key="background" className="background" style={{backgroundColor: "white", height: "88vh", textAlign: "center"}} updateCssViewer={this.updateCssViewer}/>
        {this.showView()}
      </div>
    );
  };

  updateCssViewer() {
    this.forceUpdate();
  }
}

export default App;
