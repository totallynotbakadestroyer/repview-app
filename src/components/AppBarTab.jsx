import { Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 24,
    padding: "5%",
  },
});

const AppBarTab = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
