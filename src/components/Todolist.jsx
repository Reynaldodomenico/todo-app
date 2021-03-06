import React from 'react';

const Todolist = ({todos,setTodos,setEditTodo}) => {

    const handleComplete = (todo) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
            return{...item, completed : !item.completed};
        }
        return item;
    })
    );
    };

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id ===id);
        setEditTodo(findTodo);
    };

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };


  return (
    <div className="scrolltodolist">
        {todos.map((todo)=> (
        <li className="list-item" key={todo.id}>
            <textarea type="text" 
            className={`list ${todo.completed ? "complete" : ""}`} 
            value={todo.title} 
            onChange={(event) => event.preventDefault()}/>
            <div className="icon">
                <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                    <i className="fa fa-check-circle"></i>
                </button>
                <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                    <i className="fa fa-edit"></i>
                </button>
                <button className="button-delete task-button" onClick={()=> handleDelete(todo)}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </li>
        ))}
    </div>
  )
}

export default Todolist