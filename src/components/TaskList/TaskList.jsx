import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <ul className='list-group'>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onCompleteTask={() => onCompleteTask(task.id)}
          onDeleteTask={() => onDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
