import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from '../components/shared/Header';

const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

App.propTypes = {
  route: PropTypes.any.isRequired,
};

export default {
  component: App
};
