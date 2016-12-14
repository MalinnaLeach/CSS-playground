import React, { Component } from 'react';
import htmlModule from './htmlModule';

class HTMLTranslator extends Component {
 constructor(props) {
   super(props);

 }

 htmlLine() {
   return htmlModule.map(element => (
     <div>
       <p>&nbsp;&nbsp;&nbsp;&nbsp;&#60;{element.type}&nbsp;class={element.class}&#62;</p>
       <p>&nbsp;&nbsp;&nbsp;&nbsp;&#60;&#47;{element.type}&#62;</p>
     </div>
   ))
 }

 render () {
   return (
     <div>
       {this.htmlLine()}
     </div>
 )}
}

export default HTMLTranslator;
