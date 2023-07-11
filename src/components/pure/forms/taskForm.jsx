import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <>
      <form onSubmit={addTask} className="justify-content-center align-items-center mb-4" >
        <div className="form-outline flex-fill">
          <input ref={nameRef} id="inputName" type="text" 
            placeholder="Insert a new task" className="form-control form-control-md mt-2" required autoFocus />
          <input ref={descriptionRef}  id="description" type="text"
            placeholder="Task description" className="form-control form-control-md mt-2" required /> 
          <label className="sr-only m-3" > Priority Level: </label>
          <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel" className="select-ref">
            <option value={LEVELS.NORMAL}>Normal</option>
            <option value={LEVELS.BLOCKING}>Blocking</option>
            <option value={LEVELS.URGENTE}>Urgent</option>
          </select>
        </div>

          {length === 0 
          ?  <button type="submit" className="btn btn-success btn-md">
                Create your first task!
            </button>
          : <button type="submit" className="btn btn-primary btn-md">
                Add a new task
            </button>
            }
        
      </form>
    </>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
};

export default TaskForm;
