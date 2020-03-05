// Start up point for the client side
import 'babel-polyfill';
import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import createStore from './store';
import routes from './routes/routes';

const store = createStore();

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        {renderRoutes(routes)}
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
