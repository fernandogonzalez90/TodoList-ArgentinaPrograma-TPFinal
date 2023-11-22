import React, { useState } from 'react';

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  // Estado local para almacenar el estado de completado de la tarea
  const [completed, setCompleted] = useState(false);

  // Maneja el clic en el botón de completado
  const handleCompleteClick = () => {
    // Cambia el estado de completado al contrario del valor actual
    setCompleted(!completed);
    // Llama a la función proporcionada desde el componente padre para manejar la tarea completada
    onCompleteTask();
  };

  return (
    <>
      {/* Elemento de lista que muestra la tarea, con estilo de tachado si está completada */}
      <li className="list-group-item text-secondary pt-3 d-flex align-items-center" style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {/* Etiqueta que muestra el nombre de la tarea */}
        <label>{task.name}</label>
        {/* Botón de completado con un ícono de marca de verificación */}
        <button className='btn btn-light text-success ms-auto' onClick={handleCompleteClick}>
          <i className="fa-solid fa-check"></i>
        </button>
        {/* Botón de eliminación con un ícono de papelera */}
        <button className='btn btn-light text-danger' onClick={onDeleteTask}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    </>
  );
};

export default TaskItem;
