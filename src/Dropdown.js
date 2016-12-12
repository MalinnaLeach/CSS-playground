import React, { Component } from 'react';

class Dropdown extends Component {
 constructor() {
   super();
   this.eventHandler = this.eventHandler.bind(this);
 }

 render() {
   return (
     <div>
       <select onChange={this.eventHandler}>
         <option value="solid">Solid</option>
         <option value="dashed">Dashed</option>
         <option value="dotted">Dotted</option>
       </select>
     </div>
   );
 }

 eventHandler(event){
   this.changeBorderStyle(event.target.value);
 }

 changeBorderStyle(style) {
   this.props.changeBorderStyle(style);
 }

}

export default Dropdown;
