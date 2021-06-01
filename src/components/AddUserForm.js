import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', surname: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	return (
		<>
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.surname) return
				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name:</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Surname:</label>
			<input type="text" name="surname" value={user.surname} onChange={handleInputChange} />
			<Button>Create</Button>
		</form>
		</>
	)
}

export default AddUserForm;
