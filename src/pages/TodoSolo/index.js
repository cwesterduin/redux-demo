import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../actions"
import { DeleteButton } from "../../components"

const TodoSolo = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams();
  const pageTodo = useSelector((state) => state.find((todo) => todo.id == id));

  function handleDelete(todoId){
    dispatch(deleteTodo(todoId))
    history.push('/todo')
}
  return pageTodo ? (
    <>
      <h1>Todo: {id}</h1><DeleteButton todoId={id} handleClick={handleDelete} />
      <h2>{pageTodo.title}</h2>
      <p>{pageTodo.body}</p>
    </>
  ) : (
    <h1>404 - ToDo not found</h1>
  );
};

export default TodoSolo;
