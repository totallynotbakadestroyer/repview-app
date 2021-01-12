import { View, StyleSheet } from "react-native";
import React from "react";
import FormikTextInput from "../utils/FormikTextInput.jsx";
import Button from "../utils/Button.jsx";

const SignUpForm = ({ onSubmit }) => {
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
      <FormikTextInput
        placeholder="Password confirmation"
        name={"passwordConfirm"}
        secureTextEntry
        testID={"passwordConfirmField"}
      />
      <Button
        onPress={onSubmit}
        style={{ marginTop: 15 }}
        text={"Sign up"}
        testID={"submitButton"}
      />
    </View>
  );
};

export default SignUpForm;
