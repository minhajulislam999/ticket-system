// import React from 'react'

// function Resolve({ resolved }) {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mt-4">Resolved Tasks</h2>
//       {resolved.map(task => (
//         <div key={task.id} className="card p-2 mb-2 bg-green-100">
//           {task.title}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Resolve


function ResolvedList({ resolved }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Resolved Tasks</h2>
      {resolved.map((task) => (
        <div key={task.id} className="p-2 mb-2 rounded bg-gray-500">
          {task.title}
        </div>
      ))}
    </div>
  );
}

export default ResolvedList;
