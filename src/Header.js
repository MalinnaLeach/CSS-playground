import React, { Component } from 'react';
import fileDownload from 'react-file-download'
import CSStoFile from './CSStoFile';
import CSSTranslator from './CSSTranslator';

class Header extends Component {
  constructor(props) {
    super(props);
    this.codeDownload = this.codeDownload.bind(this);
  }

  codeDownload () {
    fileDownload(CSStoFile(), 'CSSfile.css');
  }

  render () {
    return (
      <div className="header">
        <h1>CSS Playground</h1>
        <button id="download" onClick={this.codeDownload}>Download CSS</button>
      </div>
    );
  }



}

export default Header;
