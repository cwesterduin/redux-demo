import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions';

const AddTodo = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useDispatch()

  function submitTodo(e) {
    e.preventDefault();
    dispatch(addTodo({title, body}))
    setTitle('')
    setBody('')
  }

  return (
    <tr>
      <td>
        <textarea
          style={{ resize: "vertical", width: "100%", minHeight: "40px" }}
          id="title"
          name="title"
          form="form1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
      </td>
      <td>
        <textarea
          style={{ resize: "vertical", width: "100%", minHeight: "40px" }}
          id="body"
          name="body"
          form="form1"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </td>
      <td>
        <input
          onClick={(e) => submitTodo(e)}
          type="submit"
          value="submit"
          form="form1"
        />
      </td>
    </tr>
  );
};

export default AddTodo