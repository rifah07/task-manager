import './App.css';
import { useState } from 'react';
import TaskInput from './TaskTnput';
import TaskList from './TaskLIst';

function App() {
  const [tasks, setTasks]= useState([]);
  const [newTask, setNewTask]= useState("");
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
