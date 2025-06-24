'use client'
import { useState } from 'react'

interface Task {
  id: number
  title: string
  completed: boolean
}


export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Finish assignment', completed: false },
    { id: 2, title: 'Submit Assignemt', completed: true },
    { id: 3, title: 'Prepare for next class', completed: false },
  ])

  const toggleComplete = (id: number) => {
  setTasks(prev =>
    prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  )
}

  return (
  <main className="max-w-xl mx-auto py-10 px-4">
    <h1 className="text-2xl font-bold mb-6">📋 My Tasks</h1>
    <ul className="space-y-2">
      {tasks.map(task => (
        <li key={task.id} className="flex justify-between items-center bg-white shadow p-3 rounded">
          <div>
            <span className={task.completed ? 'line-through text-gray-400' : ''}>
              {task.title}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className={task.completed ? 'text-green-600' : 'text-yellow-500'}>
              {task.completed ? '✔ Done' : '⏳ Pending'}
            </span>
            <button
              onClick={() => toggleComplete(task.id)}
              className="ml-4 text-sm bg-blue-100 px-2 py-1 rounded"
            >
              Toggle
            </button>
          </div>
        </li>
      ))}
    </ul>
  </main>
)

}
