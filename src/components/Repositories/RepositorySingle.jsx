import React from "react";
import RepositoryItem from "./RepositoryItem.jsx";
import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import ItemSeparator from "../utils/ItemSeparator.jsx";
import ReviewItem from "../Reviews/ReviewItem.jsx";
import useSingleRepository from "../../hooks/useSingleRepository.js";

const RepositorySingle = () => {
  const { id } = useParams();
  const { repository, fetchMore, loading } = useSingleRepository({
    first: 5,
    idToSearch: id,
  });

  if (loading) {
    return null;
  }

  const onEndReach = async () => {
    console.log("yeah")
    await fetchMore();
  }

  return (
    <FlatList
      ListHeaderComponent={() => (
        <RepositoryItem single={true} item={repository} />
      )}
      data={repository.reviews.edges}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
    />
  );
};

export default RepositorySingle;
