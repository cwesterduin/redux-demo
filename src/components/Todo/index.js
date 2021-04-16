import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../actions";
import { NavLink } from "react-router-dom";
import { DeleteButton } from ".."

const Todo = ({ title, body, completed, todoId }) => {
  const dispatch = useDispatch();

  function handleCheck() {
    dispatch(toggleTodo(todoId));
  }
  return (
    <tr>
      <td>
        <DeleteButton todoId={todoId}/>
        <button>✎</button>
        {title}
        <NavLink style={{ float: "right" }} to={`/todo/${todoId}`}>
          more...
        </NavLink>
      </td>
      <td>{body}</td>
      <td>
        <input type="checkbox" checked={completed} onChange={handleCheck} />
      </td>
    </tr>
  );
};

export default Todo;
