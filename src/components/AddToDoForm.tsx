import React, { useState } from 'react'
import type { ToDo } from '../Types'


interface Props {
  onAdd: (todo: ToDo) => void
}

const AddToDoForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd({
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddToDoForm
