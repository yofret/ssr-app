import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <header className="flex p-6">
      <Link to="/">
        <h1 className="text-xl">React-SSR</h1>
      </Link>

      <div className="ml-auto">
        <Link to="/users" className="py-2 px-4">Users</Link>
        <Link to="/admins" className="py-2 px-4">Admins</Link>
        {authButton}
      </div>
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.any.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
