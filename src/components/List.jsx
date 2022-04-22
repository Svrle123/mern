import React from 'react'

const List = ({ users }) => {
    return (
        <ul>
            {users.map((user) => {
                <li>{user.id}</li>
            })}
        </ul>
    )
}

export default List