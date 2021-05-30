import React from 'react';
import Button from 'react-bootstrap/Button';

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>
              <Button
                onClick={() => {
                  props.editRow(user)
                }}
              >
                Update
              </Button>
              <Button
                variant="danger"
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
