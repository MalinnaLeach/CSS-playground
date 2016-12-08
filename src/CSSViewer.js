import React, { Component } from 'react';
import Popup from 'react-popup';
import '../public/css/CSSViewer.css';

class CSSViewer extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="CSSViewer">
        <h1 className="header">CSS viewer</h1>
        <div className="cssCode">
          <p>  "float: right;" </p>
          <p>  "height: 100vh;" </p>
          <p> "width: 25%;" </p>
          </div>
      </div>
    );
  }

}
export default CSSViewer;
