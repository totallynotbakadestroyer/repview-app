import Button from "../utils/Button.jsx";
import { Alert, View } from "react-native";
import React from "react";
import useReview from "../../hooks/useReview.js";
import { useHistory } from "react-router-native";

const ReviewActions = ({ review }) => {
  const {
    deleteReview: [deleteReview],
  } = useReview();
  const history = useHistory();
  const openConfirm = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => deleteReview(review.id) },
      ],
      { cancelable: true }
    );
  };
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "space-between",
      }}
    >
      <Button
        onPress={() => history.push(`/${review.repository.id}`)}
        style={{ width: "48%" }}
        text={"View repository"}
      />
      <Button
        onPress={() => openConfirm()}
        style={{ width: "48%" }}
        color={"danger"}
        text={"Delete review"}
      />
    </View>
  );
};

export default ReviewActions;
