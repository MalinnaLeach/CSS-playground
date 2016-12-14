import React, { Component } from 'react';
import fileDownload from 'react-file-download'
import CSStoFile from './CSStoFile';
import HTMLtoFile from './HTMLtoFile';
import CSSTranslator from './CSSTranslator';

class Header extends Component {
  constructor(props) {
    super(props);
    this.codeDownload = this.codeDownload.bind(this);
  }

  codeDownload () {
    fileDownload(CSStoFile(), 'yourCSS.css');
    fileDownload(HTMLtoFile(), 'yourHTML.html');
  }

  render () {
    return (
      <div className="header">
        <h1>CSS Playground</h1>
        <button id="download" onClick={this.codeDownload}>Download files</button>
      </div>
    );
  }



}

export default Header;
