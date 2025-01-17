import React from "react";
import { Formik } from "formik";
import SignInForm from "./SignInForm.jsx";
import * as yup from "yup";
import useSignIn from "../../hooks/useSignIn";
import { useHistory } from "react-router-native";

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("password is required"),
  });
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    />
  );
};

export const SignInContainer = ({ onSubmit, ...props }) => {
  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} {...props}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
