import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab.jsx";
import LoggedInTabs from "./LoggedInTabs.jsx";
import LoggedOutTabs from "./LoggedOutTabs.jsx";
import useCurrentUser from "../../hooks/useCurrentUser.js";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
});

const AppBar = () => {
  const { data, loading } = useCurrentUser();
  console.log(data);
  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: "5%" }} horizontal>
        <AppBarTab text={"Repositories"} link={"/"} />
        {!loading && !data.authorizedUser ? (
          <LoggedOutTabs />
        ) : (
          <LoggedInTabs />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
