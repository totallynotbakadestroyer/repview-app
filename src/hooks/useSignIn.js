import {useApolloClient, useMutation} from "@apollo/react-hooks";
import { SIGN_IN } from "../graphql/mutations.js";
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(response.data.authorize.accessToken);
    await apolloClient.resetStore();
    return response;
  };

  return [signIn, result];
};

export default useSignIn;
