import React, { useState, useEffect } from 'react';

const UpdateUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Surname</label>
      <input type="text" name="surname" value={user.surname} onChange={handleInputChange} />
      <button className="btn btn-secondary">Update user</button>
      <button className="btn btn-danger" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  )
}

export default UpdateUserForm;
