import React from 'react';

import TodoItem from './TodoItem';

let TodoList = ({ todos, onClick }) => {
  return (
    <ul>
      {todos.map((item,index) =>(
        <TodoItem {...item} onClick = {()=> onClick(item.text)} />
      ))};
    </ul>
  ); 
   {
          // <TodoItem text={item.text} completed = {item.completed} onClick = {()=>onClick(item.text)} />
        }
}

export default TodoList;