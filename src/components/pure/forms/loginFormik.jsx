import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../../services/axiosCRUDService";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
  .required("Password is required"),
});

function LoginFormik() {

  const navigate = useNavigate();
  
  const goTo = () => {
    navigate('/profile') 
  }

  const goRegister = () => {
    navigate('/register')
  }

  const initialCredentials = {
    email: "",
    password: "",
  }; 
  
  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data?.token) {
          alert(JSON.stringify(`Token: ${response.data?.token}`));
          sessionStorage.setItem("token", response.data?.token);
        } else {
          sessionStorage.removeItem("token");
          throw new Error("Login failure");
        }
        alert(JSON.stringify(response.data.token));
      })
      .catch((error) => {
        sessionStorage.removeItem("token");
        alert(`An error occurred: ${error}`);
      })
      .finally(() => console.log("Login done"));
  };

  return (
    <div>
      <h4 style={{marginTop: "1.5rem"}}>Login Form with Formik</h4>
      <Formik
        initialValues={initialCredentials}
        // Yup Validation Schema
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          authUser(values)
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
            <button type="submit" className="m-3"> Login </button> 
            <p className="account"> Don't have an account? <a onClick={goRegister} className="register">Register </a> </p>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
