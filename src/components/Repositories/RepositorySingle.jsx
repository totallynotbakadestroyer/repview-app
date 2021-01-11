import React from "react";
import RepositoryItem from "./RepositoryItem.jsx";
import { useQuery } from "@apollo/react-hooks";
import { GET_SINGLE_REPOSITORY } from "../../graphql/queries.js";
import { useParams } from "react-router-native";

const RepositorySingle = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { idToSearch: id },
  });
  if (loading) {
    return null;
  }
  return <RepositoryItem item={data.repository} single={true} />;
};

export default RepositorySingle;
