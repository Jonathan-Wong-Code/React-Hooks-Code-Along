import React, { useState, useEffect } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import Axios from 'axios';
import TodoListContext from './TodoListContext';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  useEffect(() => {
    console.log(todos);
  },[todos])

  useEffect(() => {
    let mounted = true;
    const getTodos = async () => {
      const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
      if(mounted) {
        setTodos(response.data);
      }
    }
    getTodos()
    return () => {
      mounted = false;
    }
  }, [])

  return (
    <div>
      <CreateTodo addTodo={addTodo}/>
      <TodoListContext.Provider value={{ todos, deleteTodo}}>
        <TodoList />
      </TodoListContext.Provider>
    </div>  
  )
}

export default App;

