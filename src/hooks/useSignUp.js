import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER } from "../graphql/mutations.js";
import useSignIn from "./useSignIn.js";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();

  const signUp = async ({ username, password }) => {
    await mutate({
      variables: { userPayload: { username, password } },
    });
    return signIn({username, password});
  };

  return [signUp, result];
};

export default useSignUp;
