import React, { Component } from 'react';
import htmlModule from './htmlModule';

class HTMLTranslator extends Component {
  constructor(props) {
    super(props);
  }

  htmlOpen(element, indent) {
    return <p>{this.indentGenerator(indent)}&#60;{element.type}&nbsp;class=&quot;{element.class}&quot;&#62;</p>
  }

  htmlClose(element, indent) {
    return (
      <p>{this.indentGenerator(indent)}&#60;&#47;{element.type}&#62;</p>
    )
  }

  htmlText(element, indent) {
    return (
      <p>{this.indentGenerator(indent)}&#60;{element.type}&nbsp;class=&quot;{element.class}&quot;&#62;{element.content}&#60;&#47;{element.type}&#62;</p>
    )
  }

  htmlImg(element, indent) {
    return (
      <p>{this.indentGenerator(indent)}&#60;{element.type}&nbsp;class=&quot;{element.class}&quot;&nbsp;src=&quot;{element.src}&quot;&#47;&nbsp;&#62;</p>
    )
  }

  indentGenerator(indent) {
    var indents = [];
    for (var i=1; i<=indent+4; i++) {
      indents.push(<span>&nbsp;</span>)
    }
    return indents
  }


  renderHTML(array, results = [], indent=0) {
    indent += 2
    for (var element of array) {
      if (!!element.content) {
        results.push(this.htmlText(element, indent))
      } else if (!!element.src) {
        results.push(this.htmlImg(element, indent))
      } else {
        results.push(this.htmlOpen(element, indent))
        if (element.children !== []) {
          this.renderHTML(element.children, results, indent)
        }
        results.push(this.htmlClose(element, indent))
      }
    }
    return results
  }

  render () {
    return (
      <div>
        {this.renderHTML(htmlModule[0].children)}
      </div>
  )}
}

export default HTMLTranslator;
