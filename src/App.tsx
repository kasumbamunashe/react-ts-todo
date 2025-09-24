import React, { useState } from 'react';
import './App.css';

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { 
      id: '1', 
      title: 'Build ToDo App', 
      description: 'Implement using React + TypeScript', 
      completed: false,
      createdAt: new Date()
    }
  ]);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const addTodo = () => {
    if (title.trim() === '') {
      // Visual feedback for empty title
      document.getElementById('title-input')?.focus();
      return;
    }
    
    setIsAdding(true);
    
    // Simulate async operation for better UX
    setTimeout(() => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title: title.trim(),
        description: description.trim(),
        completed: false,
        createdAt: new Date()
      };
      
      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
      setIsAdding(false);
    }, 300);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isAdding) {
      addTodo();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="app">
      {/* Header Section */}
      <header className="app-header">
        <div className="time-display">
          <div className="current-time">{formatTime(new Date())}</div>
          <div className="current-date">{formatDate(new Date())}</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* App Title */}
          <h1 className="app-title">
            <span className="title-icon">✓</span>
            To-Do List
          </h1>
          
          {/* Add Todo Form */}
          <section className="add-todo-section">
            <div className="form-grid">
              <label htmlFor="title-input" className="form-label">Title</label>
              <label htmlFor="description-input" className="form-label">Description</label>
              <span className="form-label"></span> {/* Spacer for button alignment */}
              
              <input
                id="title-input"
                type="text"
                placeholder="Enter task title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyPress={handleKeyPress}
                className="title-input"
                disabled={isAdding}
                maxLength={50}
              />
              
              <input
                id="description-input"
                type="text"
                placeholder="Add description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyPress={handleKeyPress}
                className="description-input"
                disabled={isAdding}
                maxLength={100}
              />
              
              <button 
                onClick={addTodo} 
                className={`add-button ${isAdding ? 'adding' : ''}`}
                disabled={isAdding}
              >
                {isAdding ? (
                  <span className="button-loading">
                    <div className="spinner"></div>
                  </span>
                ) : (
                  'Add Task'
                )}
              </button>
            </div>
            
            {/* Character counters */}
            <div className="character-counters">
              <span>{title.length}/50</span>
              <span>{description.length}/100</span>
              <span></span>
            </div>
          </section>

          {/* Divider */}
          <div className="section-divider"></div>

          {/* Todo List */}
          <section className="todo-list-section">
            <div className="list-header">
              <h2 className="section-title">Active Tasks ({todos.filter(t => !t.completed).length})</h2>
            </div>
            
            <div className="todo-list">
              {todos.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">📝</div>
                  <h3>No tasks yet</h3>
                  <p>Add your first task above to get started!</p>
                </div>
              ) : (
                todos.map((todo) => (
                  <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                    <div className="todo-checkbox">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="checkbox"
                        id={`todo-${todo.id}`}
                      />
                      <label htmlFor={`todo-${todo.id}`} className="checkmark"></label>
                    </div>
                    
                    <div className="todo-content">
                      <div className="todo-text">
                        <h3 className="todo-title">{todo.title}</h3>
                        <p className="todo-description">{todo.description}</p>
                      </div>
                      <div className="todo-meta">
                        <span className="todo-date">
                          Added {formatDate(todo.createdAt)}
                        </span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => deleteTodo(todo.id)} 
                      className="delete-button"
                      title="Delete task"
                      aria-label={`Delete task: ${todo.title}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;