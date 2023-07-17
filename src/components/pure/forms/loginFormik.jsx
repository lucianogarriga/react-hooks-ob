import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
  .required("Password is required"),
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
          await new Promise((r) => setTimeout(r, 2000));
          alert(JSON.stringify(values, null, 2));
          // We save the data in local storage of browser
          localStorage.setItem("credentials", values);
        }}
      >
        {/* Obtain Props from Formik */}

        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email" className="mt-3">
              Email
            </label>
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
            <br/>
            <label htmlFor="password" className="mt-3">
              Password
            </label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="password1234"
            />
            {/* Password errors */}
            {errors.password && touched.password && ( 
                <ErrorMessage name="password" component="div" /> 
            )}
            <br/>
            <button type="submit" className="m-3">
              Login
            </button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
