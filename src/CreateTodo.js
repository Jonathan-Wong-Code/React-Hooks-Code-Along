import React, { useState } from 'react';
import uuid from 'uuid';

function CreateTodo({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescript, setTodoDescript] = useState('');

  const onTitleChange = (e) => {
    setTodoTitle(e.target.value);
  }

  const onDescriptChange = (e) => {
    setTodoDescript(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    addTodo({
      title : todoTitle,
      body : todoDescript,
      id: uuid()
    })
  }

  return (
    <form action="" onSubmit={onFormSubmit}>
      <input type="text" value={todoTitle} onChange={onTitleChange} />
      <textarea name="" id="" cols="30" rows="10" value={todoDescript} onChange={onDescriptChange}>
      </textarea>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default CreateTodo;