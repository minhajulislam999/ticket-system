// import React from 'react'


// function TicketCard({ ticket, handleAddTask }) {
//   return (
//     // <div className="bg-white p-4 rounded-md shadow-md text-gray-900">
//     //   <h3>{ticket.title}</h3>
//     //   <p>{ticket.description}</p>
//     //    <p><strong>Customer:</strong> {ticket.customer}</p>
//     //   <p><strong>Priority:</strong> {ticket.priority}</p>
//     //   <p><strong>Status:</strong> {ticket.status}</p>
//     //   <p><strong>Created At:</strong> {ticket.createdAt}</p>
//     //   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAddTask(ticket)}>
//     //     Add Task
//     //   </button>
//     // </div>

// function TicketCard({ ticket, handleAddTask }) {
//   return (
//     <div className="card p-4 shadow cursor-pointer" onClick={() => handleAddTask(ticket)}>
//       <h3>{ticket.title}</h3>
//       <p>{ticket.description}</p>
//       <p>Customer: {ticket.customer}</p>
//     </div>
//   )
// }

// //     <div>
// //   <h2 className="text-xl font-bold mt-4">Customer Tickets</h2>
// //   {tickets.map(ticket => (
// //     <div key={ticket.id} className="card p-3 mb-2">
// //       <h3>{ticket.title}</h3>
// //       <button
// //         className="btn btn-primary mt-2"
// //         onClick={() => handleAddTask(ticket)}
// //       >
// //         Start Task
// //       </button>
// //     </div>
// //   ))}
// // </div>
//   )
// }

// export default TicketCard


function TicketCard({ ticket, handleAddTask }) {
  return (
    <div
      className="p-4 shadow-md rounded cursor-pointer hover:bg-gray-700"
      onClick={() => handleAddTask(ticket)}
    >
      <h3 className="font-bold text-lg">{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>Customer: {ticket.customer}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Status: {ticket.status}</p>
      <p>Created At: {ticket.createdAt}</p>
    </div>
  );
}

export default TicketCard;