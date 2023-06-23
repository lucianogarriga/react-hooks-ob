import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

// Import styles
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

function TaskListComponent() {
  // Initial value of State Variable
  const defaultTask1 = new Task("Example","Description 1",false,LEVELS.NORMAL); 
  const defaultTask2 = new Task("Example 2","Description 2",true,LEVELS.BLOCKING);
  const defaultTask3 = new Task("Example 3","Description 3",true,LEVELS.URGENTE);

  // Component State
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  // State 'Loading'
  const [loading, setLoading] = useState(true);

  // Control of lifecycle of the Component
 

  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList component is goint to unmount");
    };
  }, [tasks]); 

  return (
    <div className="col-12">
      <div className="card p-0">
        {/* Card Header - Title */}
        <div className="card-header pt-3">
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
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              
              {tasks.map((task, index) => 
                <TaskComponent 
                  key={index} 
                  task={task} />)
              }
 
            </tbody>
          </table>
          <TaskForm />
        </div>
      </div>
    </div>
  );
}

export default TaskListComponent;
