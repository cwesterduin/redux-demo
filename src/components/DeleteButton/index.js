import React from 'react'

const DeleteButton = ({ todoId, handleClick }) => {

    return (
        <button onClick={() => handleClick(todoId)}>delete</button>
    )
}

export default DeleteButton
