import React from "react";

import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "./src/utils/apolloClient";

const App = () => {
  const apolloClient = createApolloClient();

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
