import React from "react";
import FormikTextInput from "../utils/FormikTextInput.jsx";
import { View } from "react-native";
import Button from "../utils/Button.jsx";

const CreateReviewForm = ({ handleSubmit }) => {
  return (
    <View style={{ paddingHorizontal: "5%" }}>
      <FormikTextInput
        placeholder={"Repository owner name"}
        name={"repositoryOwnerName"}
      />
      <FormikTextInput
        placeholder={"Repository name"}
        name={"repositoryName"}
      />
      <FormikTextInput
        placeholder={"Rating between 0 and 100"}
        name={"repositoryRating"}
      />
      <FormikTextInput
        multiline
        placeholder={"Review"}
        name={"repositoryReview"}
      />
      <Button
        text={"Create a review"}
        onPress={handleSubmit}
        style={{ marginTop: 15 }}
      />
    </View>
  );
};

export default CreateReviewForm;
