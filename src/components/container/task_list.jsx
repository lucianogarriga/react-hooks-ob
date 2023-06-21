import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

// Import styles
import '../../styles/task.scss';

function TaskListComponent() {

  // Valor inicial de la variable de estado
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  // Estado del Componente
  const [tasks, setTasks] = useState([defaultTask]);
  // Estado 'Loading'
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del Componente

  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList component is goint to unmount");
    };
  }, [tasks]);

  const changeCompleted = () => {
    console.log("Cambiando estado");
  };

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/* {TODO - APLICAR  MAP/FOR P/ RENDERIZAR LISTA DE TAREAS} */}
      <TaskComponent task={defaultTask} changeState={changeCompleted}> 
      </TaskComponent>
    </div>
  );
}

export default TaskListComponent;
