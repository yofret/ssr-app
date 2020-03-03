// Start up point for the client side
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provided } from 'react-redux';
import App from './routes';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.hydrate(
  <Provided store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provided>,
  document.querySelector('#root')
);
