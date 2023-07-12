import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// Models
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/role.enum";

const RegisterFormik = () => {
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    // Confirmation of the password
    confirm: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object.shape({
    username: Yup.string()
        .min(4, 'Username too short!')
        .max(28, 'Username too Long!')
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password too short. Min 8 characters')
        .required('Password is required'),
    confirm: Yup.string()
        .when("password", {
            is: value => (value && value.length > 0
                ? true
                : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                'Password must match'
            )
        }).required('You must confirm the password')
  });

  const submit = (values) => {
    alert("Register user");
  };

  return <div></div>;
};

export default RegisterFormik;
