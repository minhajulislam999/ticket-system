import React from 'react'

function TaskStatus({ tasks, handleComplete }) {
  return (
    <div className=" p-4 rounded-md shadow-md w-1/3">
      <h2>Task Status</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
            <button onClick={() => handleComplete(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskStatus
