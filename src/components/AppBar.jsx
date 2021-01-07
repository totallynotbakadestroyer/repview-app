import React from "react";
import { View, StyleSheet,  } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab.jsx";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text={"Repview"} />
    </View>
  );
};

export default AppBar;
