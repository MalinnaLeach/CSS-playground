import React, { Component } from 'react';
import '../public/css/Header.css';
import fileDownload from 'react-file-download';
import CSStoFile from './CSStoFile';
import HTMLtoFile from './HTMLtoFile';
import CSSViewer from './CSSViewer';
import HTMLViewer from './HTMLViewer';

class Header extends Component {
  constructor(props) {
    super(props);
    this.codeDownload = this.codeDownload.bind(this);
    this.switchCSS = this.switchCSS.bind(this);
    this.switchHTML = this.switchHTML.bind(this);
  }

  codeDownload () {
    fileDownload(CSStoFile(), 'yourCSS.css');
    fileDownload(HTMLtoFile(), 'yourHTML.html');
  }

  switchCSS() {
    this.props.updateView('css')
  }

  switchHTML() {
    this.props.updateView('html')
  }

  render () {
    return (
      <div className="header">
        <h1>CSS Playground</h1>
        <div className="buttonDiv">
        <button id="download" onClick={this.codeDownload}>Download files</button>
        <button id="showcss" onClick={this.switchCSS}>Show CSS</button>
        <button id="showhtml" onClick={this.switchHTML}>Show HTML</button>
        </div>
      </div>
    );
  }
}

export default Header;
