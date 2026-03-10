


import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import TicketCard from "./components/TicketCard/TicketCard";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import ResolvedList from "./components/ResolvedList/ResolvedList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const handleAddTask = (ticket) => {
    if (tasks.find((t) => t.id === ticket.id)) {
      toast.info("Task already in progress");
      return;
    }
    setTasks([...tasks, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.success("Task added to In Progress");
  };

  const handleComplete = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    setTasks(tasks.filter((t) => t.id !== id));
    setResolved([...resolved, task]);
    toast.success("Task completed successfully!");
  };

  return (
    <>
      <Navbar />
      <Banner tasksCount={tasks.length} resolvedCount={resolved.length} />
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Left Tickets */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} handleAddTask={handleAddTask} />
          ))}
        </div>
        {/* Right TaskStatus + Resolved */}
        <div className="w-full md:w-1/3">
          <TaskStatus tasks={tasks} handleComplete={handleComplete} />
          <ResolvedList resolved={resolved} />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;