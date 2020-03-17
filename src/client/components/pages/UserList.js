import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <div className="container m-auto px-3">
        <h1>Here is a user list</h1>
        <ul>
          {users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

UserList.defaultProps = {
  users: []
};

UserList.propTypes = {
  users: PropTypes.array,
  fetchUsers: PropTypes.func.isRequired
};

export default {
  loadData: ({ dispatch }) => dispatch(fetchUsers()),
  component: connect(mapStateToProps, { fetchUsers })(UserList)
};
