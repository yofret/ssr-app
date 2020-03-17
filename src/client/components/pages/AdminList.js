import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import requireAuth from '../hocs/requireAuth';
import { fetchAdmins } from '../../actions';

class AdminList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAdmins();
  }

  render() {
    const { admins } = this.props;

    return (
      <div className="container m-auto px-3">
        <h1>Here is the protected Admin List</h1>
        <ul>
          {admins.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  admins: state.admins
});

AdminList.defaultProps = {
  admins: []
};

AdminList.propTypes = {
  admins: PropTypes.array,
  fetchAdmins: PropTypes.func.isRequired
};

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminList)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
