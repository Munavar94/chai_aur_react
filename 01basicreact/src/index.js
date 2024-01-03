import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // for Developement 
    <App />             // custom JS render with the help of JSX in HTML
  // </React.StrictMode>
);
