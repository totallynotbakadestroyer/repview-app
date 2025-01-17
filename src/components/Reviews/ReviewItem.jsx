import { StyleSheet, View } from "react-native";
import Text from "../utils/Text.jsx";
import React from "react";
import theme from "../../theme.js";
import ReviewActions from "./ReviewActions.jsx";

const styles = StyleSheet.create({
  circle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
});

const ReviewItem = ({ review, currentUser }) => {
  return (
    <View style={{ flexDirection: "column", padding: "5%" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.circle}>
          <Text fontWeight={"bold"} fontSize={"subheading"} color={"primary"}>
            {review.rating}
          </Text>
        </View>
        <View style={{ marginLeft: "5%", flexShrink: 1 }}>
          <View style={{ paddingBottom: 10 }}>
            <Text
              testID={"reviewAuthor"}
              fontWeight={"bold"}
              fontSize={"subheading"}
            >
              {currentUser ? review.repository.fullName : review.user.username}
            </Text>
            <Text
              testID={"reviewDate"}
              fontSize={"body"}
              color={"textSecondary"}
            >
              {review.createdAt}
            </Text>
          </View>
          <View style={{ flexShrink: 1 }}>
            <Text testID={"reviewText"}>{review.text}</Text>
          </View>
        </View>
      </View>
      {currentUser ? <ReviewActions review={review} /> : null}
    </View>
  );
};

export default ReviewItem;
