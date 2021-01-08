import React from "react";
import { Formik } from "formik";
import SignInForm from "./SignInForm.jsx";

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <Formik initialValues={initialValues}>
      <SignInForm />
    </Formik>
  );
};

export default SignIn;
