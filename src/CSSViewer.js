import React, { Component } from 'react';
import '../public/css/CSSViewer.css';
import cssModule from './cssModule';
import CSSTranslator from './CSSTranslator';

class CSSViewer extends Component {

  csstext () {
    return(
      Object.keys(cssModule).map(name => (
        <CSSTranslator key={name} name={name} />
      ))
    )
  }

  render () {
    return (
      <div className="CSSViewer">
        {this.csstext()}
      </div>
    );
  }

}
export default CSSViewer;
