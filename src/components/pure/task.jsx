import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Import styles
import '../../styles/task.scss';

// Colocar task o props es lo mismo
const TaskComponent = ({ task, changeState }) => {

  useEffect(() => {
    console.log('Created task');
    return () => {
      console.log('Task is going to unmount');
    };
  }, []);

  return (
    <div>
      <h2 className="task-name">Nombre: {task.name}</h2>
      <h3>Descripcion: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>This task is: {task.completed 
        ? 'COMPLETED' 
        : 'PENDING'
      }</h5>
      
      <button onClick={changeState}>Cambiar estado</button>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
