// Start up point for the client side
import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home';

ReactDom.hydrate(<Home />, document.querySelector('#root'));
