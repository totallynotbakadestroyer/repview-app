import AppBarTab from "./AppBarTab.jsx";
import { View } from "react-native";
import React from "react";

const LoggedOutTabs = () => {
  return (
    <View style={{flexDirection: "row"}}>
      <AppBarTab text={"Sign in"} link={"/sign-in"} />
      <AppBarTab text={"Sign up"} link={"/sign-up"} />
    </View>
  );
};

export default LoggedOutTabs;
