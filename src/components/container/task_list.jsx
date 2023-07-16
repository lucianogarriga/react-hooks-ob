import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

// Import styles
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";
import TaskFormik from "../pure/forms/taskFormik";

function TaskListComponent() {
  // Initial value of State Variable
  const defaultTask1 = new Task(
    "Task 1",
    "Description 1",
    false,
    LEVELS.NORMAL
  );
  // const defaultTask2 = new Task("Task 2","Description 2",true,LEVELS.BLOCKING);
  // const defaultTask3 = new Task("Task 3","Description 3",true,LEVELS.URGENTE);

  // Component State
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Control of lifecycle of the Component
  useEffect(() => {
    console.log("Task State has been modified");
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      console.log("TaskList component is goint to unmount");
    };
  }, [tasks]);

  function completedTask(task) {
    console.log("Complete this task: ", task.name, task.description);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    // Update component state => it will update the
    // iteration of tasks with the new list of tasks,
    //in order to show the task updated
    setTasks(tempTask);
  }

  // Function to delete tasks
  function deleteTask(task) {
    console.log("Delete this task: ", task.name);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  }

  // Funcion to create a new task
  function addTask(task) {
    console.log("New task created: ", task);
    console.log("Create this task: ", task.name);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  const Table = () => {
    return (
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
          {tasks.map((task, index) => (
            <TaskComponent
              key={index}
              task={task}
              complete={completedTask}
              deleted={deleteTask}
            />
          ))}
        </tbody>
      </table>
    );
  };

  let taskTable = <Table></Table>;

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="col-12 form-table">
          {tasks.length === 0 ? (
            <div className="mb-5 mt-5">
              <h2>You don't have any task</h2>
              <h4>Please create one!</h4>
            </div>
          ) : (
            <div className="card p-0">
              <div className="card-header pt-3">
                <h5>Your Tasks:</h5>
              </div>
              <div
                className="card-body"
                data-mbd-perfect-scrollbar="true"
                style={{ position: "relative", height: "300px" }}
              >
                {taskTable}
              </div>
            </div>
          )}

            {/* <TaskForm add={addTask} length={tasks.length} /> */}
            <TaskFormik add={addTask} length={tasks.length} />
        </div>
      )}
    </>
  );
}

export default TaskListComponent;
