import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import App from './App';
import '../public/css/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Popup />,
  document.getElementById('popup')
);
