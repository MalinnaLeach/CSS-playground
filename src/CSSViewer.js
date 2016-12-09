import React, { Component } from 'react';
import Popup from 'react-popup';
import '../public/css/CSSViewer.css';
import cssModule from './cssModule';
import CSSTranslator from './CSSTranslator';

class CSSViewer extends Component {
  constructor(props) {
    super(props);
  }

  csstext () {
    return(
      Object.keys(cssModule).map(name => (
        <CSSTranslator name={name} />
      ))
    )
  }

  render () {
    return (
      <div className="CSSViewer">
      <h1 className="header">That&#39;s your CSS code!</h1>
        {this.csstext()}
      </div>
    );
  }

}
export default CSSViewer;
