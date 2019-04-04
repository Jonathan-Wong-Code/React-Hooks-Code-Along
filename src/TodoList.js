import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';
import TodoListContext from './TodoListContext';

function TodoList() {
  const{ todos } = useContext(TodoListContext)

  const renderTodos = () => (
    todos.map(todo => {
      return (
        <TodoListItem todo={todo} key={todo.id} />
      )
    }
  ));

  return (
    <div>
      <ul>
        {renderTodos()}
      </ul>
    </div>
  )
}

export default TodoList;