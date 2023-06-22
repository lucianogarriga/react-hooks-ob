import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Import styles
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

// Colocar task o props es lo mismo
const TaskComponent = ({ task, changeState }) => {
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
      case LEVELS.URGENT:
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
  function taskCompleted(){
    return task.completed ? (
      <i className="bi-toggle-on" style={{ color: "green" }}></i>
    ) : (
      <i className="bi-toggle-off" style={{ color: "red" }}></i>
    )
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle"> 
        {taskLevelBadge()}
      </td>
      <td className="align-middle p-1">
        {/* Sustituir por iconos */}
        {/* Ejemplos con switch/case y con op ternario */}
        {taskCompleted()}
        <i className="bi-trash" style={{ color: "tomato" }}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
