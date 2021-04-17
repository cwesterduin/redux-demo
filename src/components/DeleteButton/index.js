import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { deleteTodo } from "../../actions";

const DeleteButton = ({ todoId, handleClick }) => {

    return (
        <button onClick={() => handleClick(todoId)}>delete</button>
    )
}

export default DeleteButton
