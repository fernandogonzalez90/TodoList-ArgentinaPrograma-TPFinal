import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    // Lista no ordenada que muestra las tareas
    <ul className='list-group'>
      {/* Mapea sobre la lista de tareas y renderiza un componente TaskItem para cada tarea */}
      {tasks.map(task => (
        <TaskItem
          key={task.id}  // Utiliza el id de la tarea como clave única
          task={task}     // Pasa la tarea como propiedad al componente TaskItem
          onCompleteTask={() => onCompleteTask(task.id)}  // Proporciona una función que maneja la tarea completada
          onDeleteTask={() => onDeleteTask(task.id)}      // Proporciona una función que maneja la eliminación de la tarea
        />
      ))}
    </ul>
  );
};

export default TaskList;
