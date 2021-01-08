import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textField: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "lightgrey",
  },
  borderColorDefault: {
    borderColor: "lightgrey",
  },
  borderColorError: {
    borderColor: "#d73a4a",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.textField,
    error && styles.borderColorError,
    style,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
