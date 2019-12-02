import React from 'react';

const TodoItem = ({ text, completed, onClick })
=> {
  return (
    <div>
    <input type="text"></input>
    <button>Add Item</button>
    <li 
    onClick = {onClick}
    style={{ textDecoration : completed ? 
    "lien-throught" : "none",
    color: completed ? "green" : "red" }} 
    >
    <div style={{width : "400px" }}>{text}</div>
    </li>
    </div>
  );
};

export default TodoItem;
