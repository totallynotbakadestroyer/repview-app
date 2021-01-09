import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import React, { useContext } from "react";
import AuthStorageContext from "../../contexts/AuthStorageContext.js";
import { useApolloClient } from "@apollo/react-hooks";
import theme from "../../theme.js";

const SignOutTab = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const handleSignOut = async () => {
    console.log(await authStorage.getAccessToken());
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  const styles = StyleSheet.create({
    container: {
      marginRight: 10,
      paddingRight: 20,
    },
    text: {
      color: "white",
      fontSize: theme.fontSizes.subheading,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleSignOut}>
        <Text style={styles.text}>Log out</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignOutTab;
