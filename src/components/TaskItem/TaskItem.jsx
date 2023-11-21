import React, { useState } from 'react';

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const handleCompleteClick = () => {
    setCompleted(!completed);
    onCompleteTask();
  };

  return (
    <>
      <li className="list-group-item text-secondary pt-3 d-flex align-items-center" style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        <label>{task.name}</label>
        <button className='btn btn-light text-success ms-auto' onClick={handleCompleteClick}><i class="fa-solid fa-check"></i></button>
        <button className='btn btn-light text-danger' onClick={onDeleteTask}><i class="fa-solid fa-trash"></i></button>
      </li>

    </>
  );
};

export default TaskItem;
