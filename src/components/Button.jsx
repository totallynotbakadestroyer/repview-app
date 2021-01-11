import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import Text from "./Text.jsx";
import React from "react";
import theme from "../theme.js";

const Button = ({ onPress, text, style, ...props }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      color: "white",
      textAlign: "center",
      paddingVertical: 10,
      borderRadius: 5,
    },
  });
  const buttonStyle = [styles.button, style];
  return (
    <TouchableWithoutFeedback onPress={onPress} {...props}>
      <Text style={buttonStyle} fontSize={"subheading"}>
        {text}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default Button;
