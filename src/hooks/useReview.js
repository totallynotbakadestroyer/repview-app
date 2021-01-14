import {useApolloClient, useMutation} from "@apollo/react-hooks";
import { CREATE_REVIEW, DELETE_REVIEW } from "../graphql/mutations.js";

const useReview = () => {
  const apolloClient = useApolloClient();
  const [create, creationResult] = useMutation(CREATE_REVIEW);
  const [remove, deletionResult] = useMutation(DELETE_REVIEW);

  const createReview = async (repositoryName, ownerName, rating, text) => {
    return await create({
      variables: { reviewPayload: { repositoryName, ownerName, rating, text } },
    });
  };
  const deleteReview = async (id) => {
    await remove({
      variables: { id },
    });
    await apolloClient.resetStore();
  };

  return {
    createReview: [createReview, creationResult],
    deleteReview: [deleteReview, deletionResult],
  };
};

export default useReview;
