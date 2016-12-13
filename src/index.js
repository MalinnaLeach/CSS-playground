import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import App from './App';
import '../public/css/index.css';
import Dragtest from './Dragtest'
import '../public/css/dragCss.css';

// import Draggable from 'react-draggable';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  // <Draggable>
  // <span>
    <Popup />,
  //   </span>
  // </Draggable>,
  document.getElementById('popup')
);

ReactDOM.render(
  <Dragtest />,
  document.getElementById('dragger')
);
