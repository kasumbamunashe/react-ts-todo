import type { ToDo } from '../Types'

let todos: ToDo[] = [
  { id: '1', title: 'Learn React', description: 'Study React fundamentals', completed: false, createdAt: new Date().toISOString() },
  { id: '2', title: 'Build ToDo App', description: 'Implement using React + TypeScript', completed: false, createdAt: new Date().toISOString() },
]

const simulateDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms))

export async function getToDos(): Promise<ToDo[]> {
  await simulateDelay()
  return [...todos]
}

export async function addToDo(todo: ToDo): Promise<void> {
  await simulateDelay()
  todos.push(todo)
}

export async function updateToDo(updated: ToDo): Promise<void> {
  await simulateDelay()
  todos = todos.map(t => (t.id === updated.id ? updated : t))
}

export async function deleteToDo(id: string): Promise<void> {
  await simulateDelay()
  todos = todos.filter(t => t.id !== id)
}
