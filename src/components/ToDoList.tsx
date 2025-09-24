import React from 'react'
import type { ToDo } from '../Types'
import ToDoItem from './ToDoItem'

interface Props {
  todos: ToDo[]
  onToggle: (id: string) => void
  onEdit: (todo: ToDo) => void
  onDelete: (id: string) => void
}

const ToDoList: React.FC<Props> = ({ todos, onToggle, onEdit, onDelete }) => {
  if (!todos.length) return <p>No To-Dos found.</p>
  return (
    <div>
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default ToDoList
