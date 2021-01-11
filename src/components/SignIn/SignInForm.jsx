import { View, StyleSheet } from "react-native";
import React from "react";
import FormikTextInput from "../utils/FormikTextInput.jsx";
import Button from "../utils/Button.jsx";

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: "5%",
    },
  });

  return (
    <View style={styles.container}>
      <FormikTextInput
        testID={"usernameField"}
        placeholder="Username"
        name={"username"}
      />
      <FormikTextInput
        placeholder="Password"
        name={"password"}
        secureTextEntry
        testID={"passwordField"}
      />
      <Button
        onPress={onSubmit}
        style={{ marginTop: 15 }}
        text={"Sign in"}
        testID={"submitButton"}
      />
    </View>
  );
};

export default SignInForm;
