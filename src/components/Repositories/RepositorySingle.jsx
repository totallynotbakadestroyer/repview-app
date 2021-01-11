import React from "react";
import RepositoryItem from "./RepositoryItem.jsx";
import { useQuery } from "@apollo/react-hooks";
import { GET_SINGLE_REPOSITORY } from "../../graphql/queries.js";
import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import ItemSeparator from "../utils/ItemSeparator.jsx";
import ReviewItem from "../Reviews/ReviewItem.jsx";

const RepositorySingle = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    fetchPolicy: "cache-and-network",
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
