import { Text, TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import React from "react";
import theme from "../theme";
import { Link } from "react-router-native";

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

const AppBarTab = ({ text, link }) => {
  return (
    <View style={styles.container}>
      <Link to={link} component={TouchableWithoutFeedback}>
        <Text style={styles.text}>{text}</Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
