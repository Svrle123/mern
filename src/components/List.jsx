import React from 'react'

const List = ({ users }) => {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.id}</li>
            ))}
        </ul>
    )
}

export default List