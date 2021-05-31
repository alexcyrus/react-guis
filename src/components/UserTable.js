import React from 'react';
import Button from 'react-bootstrap/Button';

const UserTable = props => (
  <table>
    <tbody>
      {props.filteredUsers.length > 0 ? (
        props.filteredUsers.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  props.editRow(user)
                }}
              >
                Update
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable;
