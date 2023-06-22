import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

// Import styles
import "../../styles/task.scss";

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
      <div className="col-12">
        <div className="card">
          {/* Card Header - Title */}
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
          {/* Body - Content */}
          <div
            className="card-body"
            data-mbd-perfect-scrollbar="true"
            style={{ position: "relative", height: "300px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Title</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Iterar sobre una lista de tareas */}
      <TaskComponent
        task={defaultTask}
        changeState={changeCompleted}
      ></TaskComponent>
              </tbody>
            </table>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default TaskListComponent;
