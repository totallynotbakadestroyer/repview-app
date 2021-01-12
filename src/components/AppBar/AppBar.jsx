import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab.jsx";
import { useQuery } from "@apollo/react-hooks";
import { AUTHORIZED_USER } from "../../graphql/queries.js";
import SignOutTab from "./SignOutTab.jsx";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
});

const AppBar = () => {
  const { data, loading } = useQuery(AUTHORIZED_USER);
  console.log(data);
  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: "5%" }} horizontal>
        <AppBarTab style={styles} text={"Repositories"} link={"/"} />
        <AppBarTab style={styles} text={"Create a review"} link={"/create"} />
        {!loading && !data.authorizedUser ? (
          <View style={{ flexDirection: "row" }}>
            <AppBarTab style={styles} text={"Sign in"} link={"/sign-in"} />
            <AppBarTab style={styles} text={"Sign up"} link={"/sign-up"} />
          </View>
        ) : (
          <SignOutTab />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
