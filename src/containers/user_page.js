import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchUsers} from '../actions';
import {browserHistory} from 'react-router';
import { Link } from 'react-router-dom';
import UserList from '../components/user_list';

class UserPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.fetchUsers();
  }

  render() {
    const {users} = this.props;
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/users/new">
            Add a User
          </Link>
        </div>
        <h1>Users</h1>
        <UserList users={users} />
      </div>
    );
  }
}

UserPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({fetchUsers}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
