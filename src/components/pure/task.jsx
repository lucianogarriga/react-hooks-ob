import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Import styles
import "../../styles/task.scss";

// Colocar task o props es lo mismo
const TaskComponent = ({ task, changeState }) => {
  useEffect(() => {
    console.log("Created task");
    return () => {
      console.log("Task is going to unmount");
    };
  }, []);

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
      {/* Sustituir por badge */}
        <span>{task.level}</span>
      </td>
      <td className="align-middle">
      {/* Sustituir por iconos */}
        <span>{task.completed ? "COMPLETED" : "PENDING"}</span>
      </td>
    </tr>

    // <div>
    //   <tr className="task-name">Nombre: {task.name}</tr>
    //   <tr>Descripcion: {task.description}</tr>
    //   <tr>Level: {task.level}</tr>
    //   <tr>This task is: {task.completed
    //     ? 'COMPLETED'
    //     : 'PENDING'
    //   }</tr>

    //   <button onClick={changeState}>Cambiar estado</button>
    // </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
