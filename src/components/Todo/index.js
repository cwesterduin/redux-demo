import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../../actions';

const Todo = ({ title, body, completed, todoId }) => {
const dispatch = useDispatch()

 function handleCheck(){
    dispatch(toggleTodo(todoId))
 }
  return (
    <tr>
      <td>{title}</td>
      <td>{body}</td>
      <td><input type="checkbox" checked={completed} onChange={handleCheck}/></td>
    </tr>
  );
};

export default Todo