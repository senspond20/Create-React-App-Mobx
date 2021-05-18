import React from 'react';

function TodoItem ({ title, id, isDone, onChange }){
  return (
    <h3>
      <input type="checkbox" checked={isDone} onChange={onChange(id)} />
      <span>{title}</span>
    </h3>
  )
}

export default TodoItem;