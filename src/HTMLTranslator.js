import React, { Component } from 'react';
import htmlModule from './htmlModule';

class HTMLTranslator extends Component {
  constructor(props) {
    super(props);
  }

  htmlOpen(element) {
  return (
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&#60;{element.type}&nbsp;class={element.class}&#62;</p>
  )
  }

  htmlClose(element) {
    return (
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&#60;&#47;{element.type}&#62;</p>
    )
  }

  renderHTML(array, results = []) {
    for (var element of array) {
      results.push(this.htmlOpen(element))
      if (element.children !== []) {
        this.renderHTML(element.children, results)
      }
      results.push(this.htmlClose(element))
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
