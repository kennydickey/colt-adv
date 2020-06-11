import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import class Pet from Pet.js
//as opposed to import { App } from './App'; -> non default way
import Pet from './Pet'; //relative path, si index.js must be in same dir
//you cooould have another path such as ./components/App
//renaming from default -> import Pizza from './App';
//otherwise -> import App as Pizza from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //attach react component 'App.js' in src to dom component 'root' in index.html
  <React.StrictMode>
    <Pet /> {/* or <Pizza /> if so named */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
