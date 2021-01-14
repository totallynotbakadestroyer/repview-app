import { useQuery } from "@apollo/react-hooks";
import { AUTHORIZED_USER } from "../graphql/queries.js";

const useCurrentUser = (variables) => {
  const { data, loading, fetchMore } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: "cache-first",
    variables,
  });
  const handleFetchMore = async () => {
    const canFetchMore =
      !loading && data && data.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    await fetchMore({
      query: AUTHORIZED_USER,
      variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          authorizedUser: {
            ...fetchMoreResult.authorizedUser,
            reviews: {
              ...fetchMoreResult.authorizedUser.reviews,
              edges: [
                ...previousResult.authorizedUser.reviews.edges,
                ...fetchMoreResult.authorizedUser.reviews.edges,
              ],
            },
          },
        };
      },
    });
  };
  return { data, loading, fetchMore: handleFetchMore };
};

export default useCurrentUser;
