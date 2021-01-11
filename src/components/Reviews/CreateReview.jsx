import React from "react";
import { Formik } from "formik";
import CreateReviewForm from "./CreateReviewForm.jsx";
import * as yup from "yup";
import useCreateReview from "../../hooks/useCreateReview.js";
import {useHistory} from 'react-router-native';

const CreateReview = () => {
  const history = useHistory();
  const [createReview] = useCreateReview();
  const validationSchema = yup.object().shape({
    repositoryOwnerName: yup.string().required("Owner name is required"),
    repositoryName: yup.string().required("Repository name is required"),
    repositoryRating: yup
      .number()
      .required("rating is required")
      .min(0)
      .max(100),
    repositoryReview: yup.string().optional(),
  });

  const onSubmit = async (values) => {
    const {
      repositoryOwnerName,
      repositoryName,
      repositoryRating,
      repositoryReview,
    } = values;
    console.log(values);
    try {
      const response = await createReview(
        repositoryName,
        repositoryOwnerName,
        Number(repositoryRating),
        repositoryReview
      );
      history.push(`/${response.data.createReview.repository.id}`)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CreateReviewContainer
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

const CreateReviewContainer = ({ onSubmit, ...props }) => {
  const initialValues = {
    repositoryOwnerName: "",
    repositoryName: "",
    repositoryRating: "",
    repositoryReview: "",
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} {...props}>
      {({ handleSubmit }) => <CreateReviewForm handleSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReview;
