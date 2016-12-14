import React, { Component } from 'react';
import fileDownload from 'react-file-download';
import CSStoFile from './CSStoFile';
import CSSViewer from './CSSViewer';
import HTMLViewer from './HTMLViewer';
import CSSTranslator from './CSSTranslator';

class Header extends Component {
  constructor(props) {
    super(props);
    this.codeDownload = this.codeDownload.bind(this);
  }

  codeDownload () {
    fileDownload(CSStoFile(), 'CSSfile.css');
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
        <button id="download" onClick={this.codeDownload}>Download files</button>
        <button id="showcss" onClick={this.switchCSS}>Show CSS</button>
        <button id="showhtml" onClick={this.switchHTML}>Show HTML</button>
      </div>
    );
  }



}

export default Header;
