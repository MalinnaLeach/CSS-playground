import React, { Component } from 'react';

class Dropdown extends Component {
 constructor() {
   super();
   this.handleChange = this.eventHandler.bind(this);
   this.state = {
     selectValue:'solid'
   };
 }

 eventHandler(event){
   this.changeBorderStyle(event.target.value);
 }

 changeBorderStyle(style) {
   this.props.changeBorderStyle(style);
 }

 render() {
   return (
     <div>
       <select value={this.state.selectValue} onChange={this.handleChange}>
         <option value="solid">Solid</option>
         <option value="dashed">Dashed</option>
         <option value="dotted">Dotted</option>
       </select>
     </div>
   );
 }
}

export default Dropdown;
