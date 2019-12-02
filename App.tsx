import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './Components/TodoList';

export default function App() {
 todos = ["a", "v"]
  return (
    <div>
    {
      //<CustomButtonWrapper  MyButtonHandler={()=>alert("Clicked")}
    }
      {//<TodoItem text = "Gitamjali" completed = {true}/>
      }
      <TodoList todos/>
    </div>
  )
}