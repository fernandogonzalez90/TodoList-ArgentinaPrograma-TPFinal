import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = event => {
    setTaskName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (taskName.trim() !== '') {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-list-check text-secondary"></i></span>
        <input type="text" class="form-control" placeholder="Añade un Task" value={taskName} onChange={handleInputChange}/>
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><i class="fa-solid fa-thumbtack"></i> Añadir</button>
      </div>
    </form>
  );
};

export default TaskForm;
