import React from 'react'

const Todolist = ({todos,setTodos}) => {
  return (
    <div>
        {todos.map((todo)=> (
        <li className="todo-list" key={todo.id}>
            <input type="text" 
            className="list" 
            value={todo.title} 
            onChange={(event) => event.preventDefault()}/>
        </li>

        ))}
    </div>
  )
}

export default Todolist