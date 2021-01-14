import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import Text from "./Text.jsx";
import React from "react";
import theme from "../../theme.js";

const Button = ({ onPress, text, style, color, ...props }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      color: "white",
      textAlign: "center",
      paddingVertical: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.colors.primary,
    },
    colorDanger: {
      backgroundColor: theme.colors.danger,
    },
  });
  const buttonStyle = [
    styles.button,
    color === "danger" && styles.colorDanger,
    color === "primary" && styles.colorPrimary,
    style,
  ];
  return (
    <TouchableWithoutFeedback onPress={onPress} {...props}>
      <Text style={buttonStyle} fontSize={"subheading"}>
        {text}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default Button;
