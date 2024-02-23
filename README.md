# TodoList-ArgentinaPrograma-TPFinal

TP Final en que le se pedia crear una lista de tareas que:
Permita borrar y darle un "hecho" a la tarea.
Añadir persistencia en Storage del navegador.
Añadir estilos.
Usar useEffect y useState

### Ademas le añadi un pipeline de github actions
    
    Cuenta un pipeline el cual:
    - Usa una imagen de ubuntu 22.04
    - Instala node v20
    - Instala las dependencias de la app
    - Crea un build
    - Toma informacion de los secrets de github actions
    - Deploya directamente a produccion usando netlify-cli



App.jsx

    App es el componente principal que renderiza toda la aplicación.
    Utiliza el hook useState para gestionar el estado de las tareas y el hook useEffect para actualizar el almacenamiento local cada vez que cambian las tareas.
    Las funciones handleAddTask, handleCompleteTask y handleDeleteTask se utilizan para modificar el estado de las tareas según las acciones del usuario.
    La estructura del componente incluye un TaskForm para agregar nuevas tareas y un TaskList para mostrar la lista de tareas.
    El diseño de la aplicación se define utilizando clases de Bootstrap.

TaskForm.jsx

    TaskForm es un componente funcional que representa el formulario para agregar nuevas tareas.
    Utiliza el hook useState para gestionar el estado del input del nombre de la tarea.

TaskItem.jsx

    TaskItem representa un elemento individual de la lista de tareas.
    Utiliza el hook useState para gestionar el estado de completado de la tarea.
    handleCompleteClick se encarga de cambiar el estado de completado y llama a la función onCompleteTask proporcionada por el padre.

TaskList.jsx

    TaskList es un componente que muestra la lista de tareas.
    Utiliza el componente TaskItem para renderizar cada tarea en la lista, pasando las funciones onCompleteTask y onDeleteTask.

