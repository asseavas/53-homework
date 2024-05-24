import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddTaskFormProps {
  addTask: (taskText: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={handleChange}
        placeholder="Add new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
