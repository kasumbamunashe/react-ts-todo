import React from 'react'
import type { ToDo } from '../Types'

interface Props {
  todo: ToDo
  onToggle: (id: string) => void
  onEdit: (todo: ToDo) => void
  onDelete: (id: string) => void
}

const ToDoItem: React.FC<Props> = ({ todo, onToggle, onEdit, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <div className="todo-content" onClick={() => onEdit(todo)}>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default ToDoItem
