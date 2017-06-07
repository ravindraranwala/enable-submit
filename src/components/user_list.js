import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import UserListRow from './user_list_row';

const UserList = ({users}) => {
  const renderUsers = () => {
    return users.map((user, i) => {
      return (
        <UserListRow key={i} user={user} />
      );
    });
  }

  return(
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {renderUsers()}
        </tbody>
      </table>

    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList;
