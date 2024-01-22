import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
// comentario de prueba
export function App() {
  // Obtener las tareas almacenadas en localStorage al cargar la página
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  // Efecto de actualización para guardar las tareas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Maneja la adición de una nueva tarea
  const handleAddTask = taskName => {
    const newTask = {
      id: Date.now(),
      name: taskName,
    };
    // Actualiza el estado de las tareas con la nueva tarea
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Maneja el cambio de estado de una tarea completada
  const handleCompleteTask = taskId => {
    // Actualiza el estado de las tareas modificando la tarea específica
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Maneja la eliminación de una tarea
  const handleDeleteTask = taskId => {
    // Filtra las tareas para eliminar la tarea específica
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    // Actualiza el estado de las tareas con la lista filtrada
    setTasks(updatedTasks);
  };

  // añado un comentario de pruebas
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card text-center">
        <div className="card-header text-secondary">TODO List</div>
        <div className="card-body">
          <h5 className="card-title text-secondary">Add a new task</h5>
          {/* Componente TaskForm para agregar nuevas tareas */}
          <TaskForm onAddTask={handleAddTask} />
          {/* Componente TaskList para mostrar la lista de tareas */}
          <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask} />
        </div>
        <div className="card-footer text-muted">TP Final Argentina Programa.</div>
      </div>
    </div>
  );
}
