import * as yup from "yup";
import { Formik } from "formik";
import React from "react";
import SignUpForm from "./SignUpForm.jsx";
import useSignUp from "../../hooks/useSignUp.js";
import { useHistory } from "react-router-native";

const SignUp = () => {
  const [signUp] = useSignUp();
  const history = useHistory();
  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required").min(1).max(30),
    password: yup.string().required("Password is required").min(5).max(50),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SignUpContainer onSubmit={onSubmit} validationSchema={validationSchema} />
  );
};

export const SignUpContainer = ({ onSubmit, ...props }) => {
  const initialValues = {
    username: "",
    password: "",
    passwordConfirm: "",
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} {...props}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
