import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab.jsx";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{padding: "5%"}} horizontal>
        <AppBarTab text={"Repview"} link={"/"} />
        <AppBarTab text={"Sign in"} link={"/sign-in"} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
