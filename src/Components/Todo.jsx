import React, { useState } from 'react'

function TodoApp() {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')


    function handleInputChange(e){
        setNewTodo(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(newTodo.trim()){
            setTodos([...todos, {text:newTodo, completed: false}])
            setNewTodo('')
        }
    }

    const  completedTask = (index) => {
        let updatedTodos = todos.map((todo, todoIndex) => 
            todoIndex === index ? {...todo, completed: !todo.completed} : todo 
        )
        setTodos(updatedTodos)
    }

 const deleteTodos = (index) => {
        let updatedTodos = todos.filter((_, todoIdx) => todoIdx !== index);
        setTodos(updatedTodos)
    }

    const listStyle = {
        textDecoration:'none',
        backgroundColor:'#ccc',
        color:'#fff',
        padding:'3px',
        marginTop:'10px',
        borderRadius:'10px',
        display:'flex',
        justifyContent:'space-between',
        placeItems:'center'
    }
  return (
    <div className='container w-50 mt-5'>
        <h1 style={{textAlign:'center'}}>To-Do-List</h1>
     <form onSubmit={handleSubmit}  >
        <input 
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder='Add a task..'
        className='form-control mb-2'
        />
        <button type="submit" className='btn btn-primary'>Add Task</button>
     </form>
     
    {/* To-Do List */}
    <ul>
        {todos.map((todo, index) => (
          <li key={index}
           style={{ ...listStyle, textDecoration: todo.completed ? 'line-through' : 'none' }}
        

           >
           <strong style={{paddingLeft:'15px'}}> {todo.text.toUpperCase()}</strong>
           <div className="buutons">
           <button onClick={() => completedTask(index)} className='btn btn-success m-2'>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTodos(index)} className='btn btn-danger m-2'>Delete</button>
           </div>

          </li>
        ))}
      </ul>

    </div>
  )
}

export default TodoApp