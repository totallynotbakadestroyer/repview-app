import {useMutation} from "@apollo/react-hooks";
import {CREATE_REVIEW} from "../graphql/mutations.js";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async (repositoryName, ownerName, rating, text) => {
    return await mutate({
      variables: {reviewPayload: {repositoryName, ownerName, rating, text}},
    });
  };

  return [createReview, result];
};

export default useCreateReview;
