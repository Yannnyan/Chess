import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import Board from './JS/viewBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Board/>
  </React.StrictMode>
);
