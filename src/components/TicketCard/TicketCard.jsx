import React from 'react'

function TicketCard({ ticket, handleAddTask }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md text-gray-900">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
       <p><strong>Customer:</strong> {ticket.customer}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Created At:</strong> {ticket.createdAt}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAddTask(ticket)}>
        Add Task
      </button>
    </div>
  )
}

export default TicketCard
