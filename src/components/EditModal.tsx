import React, { useState } from 'react'
import type { ToDo } from '../Types'

interface Props {
  todo: ToDo
  onSave: (updated: ToDo) => void
  onClose: () => void
}

const EditModal: React.FC<Props> = ({ todo, onSave, onClose }) => {
  const [title, setTitle] = useState(todo.title)
  const [description, setDescription] = useState(todo.description)

  const handleSave = () => {
    if (!title.trim()) return
    onSave({ ...todo, title, description })
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Edit To-Do</h3>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <input value={description} onChange={e => setDescription(e.target.value)} />
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
      <style>{`
        .modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.3); display: flex; justify-content: center; align-items: center; }
        .modal { background: white; padding: 20px; border-radius: 8px; width: 300px; }
        .modal input { width: 100%; margin: 5px 0; padding: 5px; }
        .modal-buttons { display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px; }
      `}</style>
    </div>
  )
}

export default EditModal
