// Start up point for the client side
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './routes';

ReactDom.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
