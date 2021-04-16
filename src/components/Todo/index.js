import React, { useState } from 'react'

const Todo = ({ title, body, completed }) => {
 const [isChecked, setIsChecked] = useState(completed)
  return (
    <tr>
      <td>{title}</td>
      <td>{body}</td>
      <td><input type="checkbox" checked={isChecked} onChange={() => setIsChecked(c => !c)}/></td>
    </tr>
  );
};

export default Todo