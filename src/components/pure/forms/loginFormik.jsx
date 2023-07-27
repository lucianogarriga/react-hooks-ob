import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";

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

  const handleLogin = async(values) => {
    try{
      const isAuthenticated = await authenticateUser(values.mail, values.password);
      if(isAuthenticated){
        navigate('/profile')
      } else {
        alert("Credenciales invalidas")
      }
    } catch(error){
      console.log("Ha ocurrido un error: ", error.message);
    }
  }

  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h4 style={{marginTop: "1.5rem"}}>Login Form with Formik</h4>
      <Formik
        initialValues={initialCredentials}
        // Yup Validation Schema
        validationSchema={loginSchema}
        onSubmit={async (values, {setSubmitting}) => {
          setSubmitting(true);
          await handleLogin(values);
          setSubmitting(false);
        }
        }
      >
        {/* Obtain Props from Formik */}

        {({ 
          touched,
          errors,
          isSubmitting, 
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
            <button type="submit" className="m-3" disabled={isSubmitting}> 
              {isSubmitting ? "Login in..." :  "Login"}
             </button> 
            <p className="account"> Don't have an account? <a onClick={goRegister} className="register">Register </a> </p> 
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
