import React, { Component } from 'react';
import '../public/css/HTMLViewer.css';
import htmlModule from './htmlModule';
import HTMLTranslator from './HTMLTranslator';

class HTMLViewer extends Component {


  render () {
    return (
      <div className="HTMLViewer" style={{textAlign: "left"}}>
      <p> &#60;&#33;DOCTYPE html&#62;</p>
      <p> &#60;html&#62;</p>
      <p> &nbsp;&nbsp; &#60;head&#62;</p>
      <p> &nbsp;&nbsp; &nbsp;&nbsp; &#60;meta charset="utf-8"&#62;</p>
      <p> &nbsp;&nbsp; &nbsp;&nbsp; &#60;title&#62;&#60;/title&#62;</p>
      <p> &nbsp;&nbsp; &#60;/head&#62;</p>
      <p> &nbsp;&nbsp; &#60;body&#62;</p>
      <HTMLTranslator/>
      <p> &nbsp;&nbsp; &#60;/body&#62;</p>
      <p> &#60;/html&#62;</p>
      </div>
    );
  }

}
export default HTMLViewer;
