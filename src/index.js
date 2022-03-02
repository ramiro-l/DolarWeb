import React from 'react';
import {HashRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';


function index() {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

setInterval(index, 1000)