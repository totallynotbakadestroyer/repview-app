import {useQuery} from '@apollo/react-hooks';
import {GET_SINGLE_REPOSITORY} from '../graphql/queries.js';

const useSingleRepository = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_SINGLE_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const handleFetchMore = async () => {
    const canFetchMore =
      !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    await fetchMore({
      query: GET_SINGLE_REPOSITORY,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ],
            },
          },
        };
      },
    });
  };

  return {repository: data ? data.repository : null, fetchMore: handleFetchMore, loading, ...result}
}

export default useSingleRepository;

