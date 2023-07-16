import React, { useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    name: Yup.string()
        .required("Task name is required")
})

const TaskFormik = ({add, length}) => { 
    // const nameRef = useRef("");
    // const descriptionRef = useRef("");
    // const levelRef = useRef(LEVELS.NORMAL);

    const initialCredentials = {
        name: "",
        description: "",
        level: LEVELS.NORMAL
    }

    const submitValues = async(values) =>{
        await new Promise((r) => setTimeout(r,2000));
        alert(JSON.stringify(values,null,2));
        localStorage.setItem("credentials", values)
    }

    return (
        <>
            <Formik
                initialValues={initialCredentials} 
                onSubmit={submitValues}
                validationSchema={}
            >
            {/* Obtain Props from Formik */}
            {
                ({values, errors, touched, isSubmitting})=> (
                    <Form>
                        <div className="form-outline flex-fill">
                            {/* input nameRef */}
                            <label htmlFor='name'>Task Name</label>
                            <Field id='name' type='text' name='name' placeholder='Your task'/>
                            {/* input descriptionRef */}
                            <label htmlFor='name'>Task Description</label>
                            <Field id='description' type='text' name='description' placeholder='description'/>

                            <label className='sr-only m-3'>Priority Level:</label>
                            <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel" className="select-ref">
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                            <option value={LEVELS.URGENTE}>Urgent</option>
                            </select>
                        </div>

                        {length === 0 
                            ? <button type='submit' className='btn btn-success btn-md'>Create your first task</button>
                            : <button type='submit' className='btn btn-success btn-md'>Add a new task</button>
                        }

                    </Form>
                )
            }
            </Formik>
        </>
    );
}

export default TaskFormik;
