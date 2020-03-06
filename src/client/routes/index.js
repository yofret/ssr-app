import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from '../components/shared/Header';
import { fetchCurrentUser } from '../actions';

const App = ({ route }) => (
  <Fragment>
    <Header />
    {renderRoutes(route.routes)}
  </Fragment>
);

App.propTypes = {
  route: PropTypes.any.isRequired,
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
