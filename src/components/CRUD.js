import React, { useState, Fragment } from 'react';
import AddUserForm from './AddUserForm';
import UpdateUserForm from './UpdateUserForm';
import UserTable from './UserTable';

const CRUD = () => {
	// User data
	const usersData = [
		{ id: 1, name: 'Hans', surname: 'Emil' },
		{ id: 2, name: 'Max', surname: 'Mustermann' },
		{ id: 3, name: 'Roman', surname: 'Tisch' },
	]

  // Initial state
	const initialFormState = { id: null, name: '', surname: '' }

	// Set state
	const [users, setUsers] = useState(usersData)
	const [filteredUsers, setFilteredUsers]= useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

  // Filter users
	const filterUsers = (e) => {
	  const myUsers = users.filter(user => {
	    const regex = new RegExp(`^${e.target.value}`, 'gi')
	    return user.name.match(regex) || user.surname.match(regex)
    })
  	setFilteredUsers(myUsers)
	}

	// Add user
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
		setFilteredUsers([ ...filteredUsers, user ])
	}

  // Delete user
	const deleteUser = id => {
		setEditing(false)
		setFilteredUsers(users.filter(user => user.id !== id))
		setUsers(users.filter(user => user.id !== id))
	}

  	// Update user
	const updateUser = (id, updatedUser) => {
		setEditing(false)
		setFilteredUsers(users.map(user => (user.id === id ? updatedUser : user)))
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

  // Edit row
	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, surname: user.surname })
	}

	return (
    <div className='crudContainer'>
      <div className='userForm'>
        {editing ? (
          <Fragment>
            <UpdateUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Fragment>
        ) : (
          <Fragment>
            <AddUserForm addUser={addUser} />
          </Fragment>
        )}
      </div>
      <div className='userTable'>
        <label>Filter prefix:</label>
        <input type="text" onChange={filterUsers} />
        <UserTable filteredUsers={filteredUsers} users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
    </div>
	)
}

export default CRUD;
