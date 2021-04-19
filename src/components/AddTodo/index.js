import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo, addTodo } from "../../actions";

const AddTodo = ({ newId, edit }) => {
  const [title, setTitle] = useState(edit ? edit.title : "");
  const [body, setBody] = useState(edit ? edit.body : "");
  const dispatch = useDispatch();

  function submitTodo(e) {
    e.preventDefault();
    dispatch(addTodo({ title, body, completed: false, id: newId }));
    setTitle("");
    setBody("");
  }

  function saveTodo(e) {
    e.preventDefault();
    dispatch(editTodo({ title, body, id: newId }));
    edit.setEditing(false)
  }

  const ref = useRef()
  const ref2 = useRef()
  const [height, setHeight] = useState('40px')

  useEffect(() => {
    let observer = new ResizeObserver (function(mutations) {
        setHeight(mutations[0].contentRect.height);
      });      
      let child = ref.current;
      let child2 = ref2.current;
      observer.observe(child, { box : 'border-box' });
      observer.observe(child2, { box : 'border-box' });
  },[])
  
  return (
    <tr>
      <td>
        {edit && <button onClick={() => edit.setEditing(false)}>x</button>}
        <textarea
          ref={ref}
          onChange={(e) => setTitle(e.target.value)}
          style={{ resize: "vertical", width: "100%", height: height }}
          id="title"
          name="title"
          form="form1"
          value={title}
        ></textarea>
      </td>
      <td>
        <textarea
          ref={ref2}
          style={{ resize: "vertical", width: "100%", height: height }}
          id="body"
          name="body"
          form="form1"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </td>
      <td>
        {!edit ? (
          <input
            onClick={(e) => submitTodo(e)}
            type="submit"
            value="submit"
            form="form1"
          />
        ) : (
          <input
            onClick={(e) => saveTodo(e)}
            type="submit"
            value="save"
            form="form1"
          />
        )}
      </td>
    </tr>
  );
};

export default AddTodo;
