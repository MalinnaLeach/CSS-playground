import React, { Component } from 'react';
import cssModule from './cssModule';
import '../public/css/CSSViewer.css';

class CSSTranslator extends Component {
 constructor(props) {
   super(props);

 }

 cssLine(css) {
   return Object.keys(css).map(property => (
     <p key={property}> &nbsp; {this.toCssStyle(property)}&#58; {css[property]}&#59; </p>
   ))
 }

 toCssStyle(camelCase) {
   return camelCase.replace(/\.?([A-Z]+)/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "");
 }

 render () {
   return (
     <div>
       <p>.{this.props.name} &nbsp;&#123;</p>
       {this.cssLine(cssModule[this.props.name])}
       <p> &#125; </p>
     </div>
 )}
}

export default CSSTranslator;
