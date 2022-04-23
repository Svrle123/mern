import React from 'react'

const Button = ({ title, disabled, onClick }) => {
    return (
        <button className="btn" onClick={onClick} disabled={disabled}>{title}</button>
    )
}

export default Button