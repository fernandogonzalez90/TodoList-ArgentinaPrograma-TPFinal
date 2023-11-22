import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  // Estado local para almacenar el nombre de la tarea
  const [taskName, setTaskName] = useState('');

  // Maneja el cambio en la entrada de texto
  const handleInputChange = event => {
    setTaskName(event.target.value);
  };

  // Maneja el envío del formulario
  const handleSubmit = event => {
    event.preventDefault();
    // Verifica si el nombre de la tarea no está vacío antes de agregarlo
    if (taskName.trim() !== '') {
      // Llama a la función proporcionada desde el componente padre para agregar la tarea
      onAddTask(taskName);
      // Restablece el estado a una cadena vacía después de agregar la tarea
      setTaskName('');
    }
  };

  return (
    // Formulario con un grupo de entrada y un botón
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        {/* Icono de lista de verificación como un identificador visual */}
        <span className="input-group-text" id="basic-addon1">
          <i className="fa-solid fa-list-check text-secondary"></i>
        </span>
        {/* Entrada de texto para ingresar el nombre de la tarea */}
        <input
          type="text"
          className="form-control"
          placeholder="Añade un Task"
          value={taskName}
          onChange={handleInputChange}
        />
        {/* Botón para enviar el formulario */}
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
          {/* Icono de chincheta como identificador visual del botón */}
          <i className="fa-solid fa-thumbtack"></i> Añadir
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
