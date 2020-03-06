import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ staticContext }) => {
  staticContext.notFound = true;

  return (
    <div className="container m-auto px-3">
      <h1>Page Not Found!</h1>
    </div>
  );
};

NotFound.defaultProps = {
  staticContext: {}
};

NotFound.propTypes = {
  staticContext: PropTypes.object,
};

export default NotFound;
