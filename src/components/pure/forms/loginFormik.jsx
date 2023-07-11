import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  }; 

  return (
    <div>
      <h2>Login Form</h2>
      <Formik
        initialValues={initialCredentials}
        // Yup Validation Schema
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise(r => setTimeout(r, 2000))
          alert(JSON.stringify(values, null, 2));
          // We save the data in local storage of browser
          localStorage.setItem('credentials', values)
        }}
      >
        {/* Obtain Props from Formik */}

        {(props) => {
          const {
            values, // obtain Form values
            touched, // if user touched any field
            errors, // obtain error inside a field or form
            isSubmitting, // if was send 100% or is sending
            handleChange, // if exists any change in a field to control it
            handleBlur, // if exists any focus change
          } = props;

          return (
            <Form>
              <label htmlFor="email">Email</label>
              <Field id="email" type="email" name="email" placeholder="example@email.com" />
              {/* Email errors */}
              { 
                errors.email && touched.email && 
                (
                  <div className="error">
                    <p>{errors.email}</p>
                  </div>
                )
              }
              <label htmlFor="password">Password</label>
              <Field id="password" type="password" name="password" placeholder="password1234" />
              {/* Password errors */}
              { 
                errors.password && touched.password && 
                (
                  <div className="error">
                    <p>{errors.password}</p>
                  </div>
                )
              }
              <button type="submit">Login</button>
              {isSubmitting 
              ? (<p>Login your credentials...</p>)
              : null
              }
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginFormik;
