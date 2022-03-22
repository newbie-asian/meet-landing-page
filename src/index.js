import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

console.dir(myelement);
console.log(myelement);

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
    </div>

    <p></p>
  </React.StrictMode>,
  document.getElementById('root')
);
