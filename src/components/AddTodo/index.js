import React, { useState } from 'react'

const AddTodo = () => {
  return (
    <tr>
      <td><textarea style={{resize: "vertical", width: '100%',  minHeight: '40px'}} id="title" name="title" form="form1"></textarea></td>
      <td><textarea style={{resize: "vertical", width: '100%', minHeight: '40px'}} id="body" name="body" form="form1"></textarea></td>
      <td><input type="submit" value="submit" form="form1" /></td>
    </tr>
  );
};

export default AddTodo