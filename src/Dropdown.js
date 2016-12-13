import React, { Component } from 'react';

class Dropdown extends Component {
 constructor() {
   super();
   this.eventHandler = this.eventHandler.bind(this);
 }

 renderOptions (items) {
   return this.props.items.map (choice => (
     <option key={choice} value={choice}>{choice}</option>
   ))
 }

 render() {
   return (
     <div>
       <select onChange={this.eventHandler}>
         {this.renderOptions()}
       </select>
     </div>
   );
 }

 eventHandler(event){
   this.props.eventHandler(event.target.value);
 }

}

export default Dropdown;
