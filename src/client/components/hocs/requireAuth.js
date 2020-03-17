import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    render() {
      const { auth } = this.props;

      switch (auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  RequireAuth.propTypes = {
    auth: PropTypes.any.isRequired
  };

  const mapStateToProps = ({ auth }) => ({
    auth
  });

  return connect(mapStateToProps)(RequireAuth);
};
