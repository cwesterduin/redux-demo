import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from "../../actions";

const DeleteButton = ({ todoId }) => {
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(deleteTodo(todoId))
    }

    return (
        <button onClick={handleClick}>🗑</button>
    )
}

export default DeleteButton
