import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


function index() {
  ReactDOM.render(<App />,document.getElementById('root'));
}

setInterval(index, 1000)