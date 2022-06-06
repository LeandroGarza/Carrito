import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
//import './index.css';
import Routes from './routes/Routes';
//import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);*/

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);