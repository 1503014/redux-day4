import React from 'react';

const TodoItem = ({ text, completed, onClick })
=> {
  return (
    <li 
    onClick = {onClick}
    style={{ textDecoration : completed ? 
    "lien-throught" : "none",
    color: completed ? "green" : "red" }} 
    >
    <div style={{width : "400px" }}>{text}</div>
    </li>

  );
};

export default TodoItem;
