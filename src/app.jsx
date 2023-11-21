import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

export function App() {
  // Obtener las tareas almacenadas en localStorage al cargar la página
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);

  // Efecto de actualización para guardar las tareas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = taskName => {
    const newTask = {
      id: Date.now(),
      name: taskName,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleCompleteTask = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card text-center">
        <div className="card-header text-secondary">TODO List</div>
        <div className="card-body">
          <h5 className="card-title text-secondary">Add a new task</h5>
          <TaskForm onAddTask={handleAddTask} />
          <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask} />
        </div>
        <div className="card-footer text-muted">TP Final Argentina Programa.</div>
      </div>
    </div>
  );
}