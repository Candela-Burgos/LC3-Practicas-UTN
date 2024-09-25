import "./App.css";
import AddNewTask from "./components/addNewTask/AddNewTask";
import Card from "react-bootstrap/Card";
import TaskList from "./components/taskList/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((current, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <Card.Title className="mb-4">ToDo List</Card.Title>
      <AddNewTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </>
  );
}

export default App;
