import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
// import data from '/public/data.json'
import TicketCard from './components/TicketCard/TicketCard'
import TaskStatus from './components/TaskStatus/TaskStatus'

function App() {
  const [tickets, setTickets] = useState([])
  const [tasks, setTasks] = useState([]);
const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/tickets.json")
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  const handleAddTask = (ticket) => {
  alert("Task Added");

  setTasks([...tasks, ticket]);

  setCount(count + 1);
};

const handleComplete = (id) => {
  alert("Task Completed");

  const remaining = tasks.filter(task => task.id !== id);

  setTasks(remaining);

  setCount(count - 1);
};


 

  
//   Ticket Cards

// Display all ticket information in a card layout.
// Cards arranged in a 2-column grid (left side).



  return (
    <>
    
       <Navbar />
      <Banner count={count} />

      

      <div className="flex gap-6">
       
  {/* Left Side */}
  <div className="grid grid-cols-2 gap-4 w-2/2 mx-auto">
    {tickets.map(ticket => (
      <TicketCard
        key={ticket.id}
        ticket={ticket}
        handleAddTask={handleAddTask}
      />
    ))}
  </div>

  {/* Right Side */}
  <div className="w-1/3">
    <TaskStatus
      tasks={tasks}
      handleComplete={handleComplete}
    />
  </div>

</div>
    </>
  )
}

export default App
