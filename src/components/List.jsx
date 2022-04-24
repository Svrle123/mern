import React from 'react';

const List = ({ answers }) => {
    const showOnlyTen = answers.slice(-10);
    showOnlyTen.reverse();
    return (
        <ul>
            {showOnlyTen.map((answer) => (
                <li key={answer._id}>{answer._id}</li>
            ))}
        </ul>
    )
}

export default List