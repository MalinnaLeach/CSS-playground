import React, { Component } from 'react';
import Popup from 'react-popup';
// import '../public/css/CSSViewer.css';

class CSSViewer extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="CSSViewer">
        <h1 className="header">CSS viewer</h1>
      </div>
    );
  }

}
export default CSSViewer;
