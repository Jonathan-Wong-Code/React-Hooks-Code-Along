import React, {useContext} from 'react';
import TodoListContext from './TodoListContext';

const TodoListItem = ({ todo }) => {
  const { deleteTodo } = useContext(TodoListContext);

  return (
    <li key={todo.id}>
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
      <button onClick={() =>deleteTodo(todo.id)}>Delete Todo</button>
    </li>
  )
}

export default TodoListItem;