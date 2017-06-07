import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UserListRow = ({user}) => {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.age}</td>
    </tr>
  );
};

UserListRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListRow;
