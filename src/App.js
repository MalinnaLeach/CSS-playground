import React, { Component } from 'react';
import Header from './Header';
import Playground from './Playground';
import '../public/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  return (
    <div className="App">
      <Header />
      <Playground />
    </div>
    );
  };
}

export default App;
