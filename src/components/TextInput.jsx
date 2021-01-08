import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textField: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "lightgrey",
    marginBottom: 15,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textField];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
