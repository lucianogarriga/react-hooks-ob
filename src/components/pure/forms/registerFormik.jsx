import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// Models
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";
import { useNavigate } from "react-router-dom";

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

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Username too short!")
      .max(28, "Username too Long!")
      .required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User / Admin")
      .required("Role User is required"),
    password: Yup.string()
      .min(8, "Password too short. Min 8 characters")
      .required("Password is required"),
    confirm: Yup.string()
      .when("password", {  
        then: Yup.string().oneOf([Yup.ref("password")], "Password must match")
      })
      .required("You must confirm the password"),
  });

  const submit = (values) => {
    alert(values);
  };

  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login')
  }

  return (
    <div>
      <h4 style={{marginTop: "1.5rem"}}>Register Form with Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 2000));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="username"> Username </label>
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="Manuel Perez"
            />

            {/* Username Errors */}
            {errors.username && touched.username && (
              <ErrorMessage component="div" name="username" />
            )}
            <br />

            <label htmlFor="email"> Email </label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
            />

            {/* Email errors */}
            {errors.email && touched.email && (
              <ErrorMessage component="div" name="email" />
            )}
            <br />

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password1234"
              type="password"
            />
            <br/>
            {/* Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            <label htmlFor="confirm">Confirm</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="password1234"
              type="password"
            />
            {/* Confirm Password Errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div"></ErrorMessage>
            )}

            <br /> 
            <button className="m-3" type="submit">Register</button>
            <p className="account"> Have an account already? <a onClick={goLogin} className="register">Log in </a> </p>
            {isSubmitting ? <p>Sending your credentials..</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
