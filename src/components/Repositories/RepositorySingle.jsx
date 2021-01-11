import React from "react";
import RepositoryItem from "./RepositoryItem.jsx";
import { useQuery } from "@apollo/react-hooks";
import { GET_SINGLE_REPOSITORY } from "../../graphql/queries.js";
import { useParams } from "react-router-native";
import { FlatList, View, StyleSheet } from "react-native";
import Text from "../Text.jsx";
import theme from "../../theme.js";
import ItemSeparator from "../utils/ItemSeparator.jsx";

const styles = StyleSheet.create({
  circle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50/2,
    width: 50,
    height: 50,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
});

const ReviewItem = ({ review }) => {
  console.log(review);
  return (
    <View style={{ flexDirection: "row", padding: "5%" }}>
      <View style={styles.circle}>
        <Text fontWeight={"bold"} fontSize={"subheading"} color={"primary"}>
          {review.rating}
        </Text>
      </View>
      <View style={{ marginLeft: "5%" }}>
        <View style={{ paddingBottom: 10 }}>
          <Text
            testID={"reviewAuthor"}
            fontWeight={"bold"}
            fontSize={"subheading"}
          >
            {review.user.username}
          </Text>
          <Text testID={"reviewDate"} fontSize={"body"} color={"textSecondary"}>
            {review.createdAt}
          </Text>
        </View>
        <View style={{ marginRight: "10%" }}>
          <Text testID={"reviewText"}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const RepositorySingle = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { idToSearch: id },
  });

  if (loading) {
    return null;
  }
  const reviewNodes = data
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={() => (
        <RepositoryItem single={true} item={data.repository} />
      )}
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  );
};

export default RepositorySingle;
