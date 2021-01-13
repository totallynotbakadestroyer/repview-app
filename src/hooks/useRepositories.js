import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORIES } from "../graphql/queries.js";

const useRepositories = (sortSettings, keyword) => {
  const {orderBy, orderDirection} = sortSettings;
  const [repositories, setRepositories] = useState();
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection, searchKeyword: keyword },
    fetchPolicy: "cache-and-network",
  });

  const fetchRepositories = async () => {
    if (loading) {
      return null;
    } else {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [loading]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
