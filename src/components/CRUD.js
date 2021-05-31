import React, { useState, Fragment } from 'react';
import AddUserForm from './AddUserForm';
import UpdateUserForm from './UpdateUserForm';
import UserTable from './UserTable';

const CRUD = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Hans', surname: 'Emil' },
		{ id: 2, name: 'Max', surname: 'Mustermann' },
		{ id: 3, name: 'Roman', surname: 'Tisch' },
	]

	const initialFormState = { id: null, name: '', surname: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

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
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
    </div>
	)
}

export default CRUD;
