import React from "react";
import { Formik } from "formik";
import SignInForm from "./SignInForm.jsx";
import * as yup from 'yup';

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required"),
    password: yup
      .string()
      .required("password is required"),
  });

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues}>
      <SignInForm />
    </Formik>
  );
};

export default SignIn;
