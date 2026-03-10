// import React from 'react'

// function TaskStatus({ tasks, handleComplete }) {
//   return (
//     // <div className=" p-4 rounded-md shadow-md w-1/3">
//     //   <h2>Task Status</h2>
//     //   <ul>
//     //     {tasks.map(task => (
//     //       <li key={task.id}>
//     //         <span>{task.title}</span>
//     //         <button onClick={() => handleComplete(task.id)}>Complete</button>
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>

//     function TaskStatus({ tasks, handleComplete }) {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-2">In Progress</h2>
//       {tasks.map(task => (
//         <div key={task.id} className="card p-3 mb-2">
//           {task.title}
//           <button className="btn btn-success mt-2" onClick={() => handleComplete(task.id)}>
//             Complete
//           </button>
//         </div>
//       ))}
//     </div>
//   )
// }
//   )
// }

// export default TaskStatus


function TaskStatus({ tasks, handleComplete }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">In Progress</h2>
      {tasks.map((task) => (
        <div key={task.id} className="p-3 mb-2 shadow-md rounded bg-gray-700 text-white">
          <h3 className="font-semibold">{task.title}</h3>
          <button
            className="btn btn-success mt-2"
            onClick={() => handleComplete(task.id)}
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskStatus;