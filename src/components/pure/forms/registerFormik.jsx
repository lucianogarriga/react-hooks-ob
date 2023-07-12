import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
// Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/role.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        // Confirmation of the password
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object.shape(

    )

    const submit = (values) => {
        alert('Register user');
    }

    return (
        <div>
        </div>
    );
}

export default RegisterFormik;
