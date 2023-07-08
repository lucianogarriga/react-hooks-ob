import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Import styles
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

// Task||Props => Are the same
const TaskComponent = ({ task, complete, deleted }) => {
  
  useEffect(() => {
    console.log("Created task");
    return () => {
      console.log("Task is going to unmount");
    };
  }, []);

  /**
   * Function that returns a Badge
   * depends of the level of task
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0 ">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENTE:
        return (
          <h6 className="mb-0 ">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0 ">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }

  /**
   * Function that returns a toggle icon
   * depends if the task is completed or not
   */
  function taskCompletedIcon() {
    return task.completed ? (
      <i onClick={() => complete(task)} className="bi-toggle-on task-action " style={{ color: "green" }}></i>
    ) : (
      <i onClick={() => complete(task)} className="bi-toggle-off task-action" style={{ color: "red" }}></i>
    );
  }

  return (
    <tr className="fw-normal">
      <th>
        {task.completed 
        ?  <span className="task-completed ms-2">{task.name}</span>
        : <span className="ms-2">{task.name}</span>
        }       
      </th>
      <td className="align-middle p-1">
         {task.completed 
        ? <span className="task-completed">{task.description}</span>
        : <span >{task.description}</span>} 
      </td>
      <td className="align-middle p-1">
      {/* Execution of function to return a badge element */}
      {taskLevelBadge()}
      </td>
      <td className="align-middle p-1">  
      {/* Execution of function to return icon depending if task is completed or not */}
        {taskCompletedIcon()}
        <i onClick={() => deleted(task)} className="bi-trash task-action" style={{ color: "tomato" }}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  deleted: PropTypes.func.isRequired
};

export default TaskComponent;
