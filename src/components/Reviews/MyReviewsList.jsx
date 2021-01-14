import React from "react";
import useCurrentUser from "../../hooks/useCurrentUser.js";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem.jsx";

const MyReviewsList = () => {
  const { data, loading, fetchMore } = useCurrentUser({includeReviews: true, first: 3});
  if (loading) {
    return null;
  }
  if(!data.authorizedUser.reviews) {
    return null;
  }
  const onEndReach = async () => {
    await fetchMore();
  }
  return (
    <FlatList
      data={data.authorizedUser.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item.node} currentUser={true} />}
      onEndReached={onEndReach}
      keyExtractor={({cursor}) => cursor}
    />
  );
};

export default MyReviewsList;
