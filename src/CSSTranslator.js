import React, { Component } from 'react';
import cssModule from './cssModule';

class CSSTranslator extends Component {
 constructor(props) {
   super(props);
   this.toCssStyle = this.toCssStyle.bind(this);
 }

 cssLine(css) {
   return Object.keys(css).map(property => (
     <p> &nbsp; {this.toCssStyle(property)}&#58; {css[property]}&#59; </p>
   ))
 }

 toCssStyle(camelCase) {
   return camelCase.replace(/\.?([A-Z]+)/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "");
 }

 render () {
   return (
     <div className="cssCode" style={{textAlign: "left",
   margin: 10}}>
   <p>.{this.props.name} &nbsp;&#123;</p>
   {this.cssLine(cssModule[this.props.name])}
   <p> &#125; </p>
   </div>
 )}
}

export default CSSTranslator;
