import React from "react";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Task name is required"),
  description: Yup.string().required("Task description is required"),
});

const TaskFormik = ({ add, length }) => { 

  const initialCredentials = {
    name: "",
    description: "",
    level: LEVELS.NORMAL,
  };

  const submitValues = async (values,e) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(JSON.stringify(values, null, 2));
    localStorage.setItem("credentials", values); 
    // No es necesario el preventDefault en Formik,
    // Ya que Formik maneja el evento de envio y el preventDefault
    const newTask = new Task(
      values.name,
      values.description,
      false,
      values.level
    );
    add(newTask);
  };

  return (
    <>
      <Formik
        initialValues={initialCredentials}
        onSubmit={submitValues}
        validationSchema={formSchema}
      >
        {/* Obtain Props from Formik */}
        {({ errors, touched }) => (
          <Form>
            <div className="form-outline flex-fill">
              {/* input name */}
              <label htmlFor="name" className="m-3">Task Name</label>
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Your task"
                style={{width: "200px"}}
              />
              <ErrorMessage name="name" component="div" className="error"/>

              {/* input description */}
              <label htmlFor="description" className="m-3">Task Description</label>
              <Field
                id="description"
                type="text"
                name="description"
                placeholder="description"
                style={{width: "200px"}}
              />
              <ErrorMessage name="description" component="div" className="error"/>

              {/* input level */}
              <label htmlFor="level" className="sr-only m-3">Priority Level:</label>
              <Field 
                as="select"
                id="level"
                name="level"
                className="select-ref"
              >
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.BLOCKING}>Blocking</option>
                <option value={LEVELS.URGENTE}>Urgent</option>
              </Field>
            </div>

            {length === 0 ? (
              <button type="submit" className="btn btn-success btn-md">
                Create your first task
              </button>
            ) : (
              <button type="submit" className="btn btn-success btn-md">
                Add a new task
              </button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TaskFormik;
