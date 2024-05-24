import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Task from './components/Task/Task';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


interface Task {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: uuidv4(), text: 'Eat' },
    { id: uuidv4(), text: 'Sleep' },
    { id: uuidv4(), text: 'Walk' }
  ]);

  const addTask = (taskText: string) => {
    setTasks([...tasks, { id: uuidv4(), text: taskText }]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <AddTaskForm addTask={addTask} />
      {tasks.map(task => (
        <Task key={task.id} id={task.id} text={task.text} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default App;