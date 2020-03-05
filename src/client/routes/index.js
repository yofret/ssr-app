import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../components/shared/Header';
import routes from './routes';

const App = () => (
  <div>
    <Header />
    {renderRoutes(routes)}
  </div>
);

export default App;
