import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import React from "react";
import TextInput from "./TextInput.jsx";
import { useField } from "formik";
import theme from "../theme.js";
import Text from "./Text.jsx";

const SignInForm = () => {
  const [usernameField, usernameMeta, usernameHelpers] = useField("mass");
  const [passwordField, passwordMeta, passwordHelpers] = useField("height");

  const styles = StyleSheet.create({
    container: {
      padding: "5%",
    },
    button: {
      backgroundColor: theme.colors.primary,
      color: "white",
      textAlign: "center",
      paddingVertical: 10,
      borderRadius: 5,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textField}
        placeholder="Username"
        value={usernameField.value}
        onChangeText={(text) => usernameHelpers.setValue(text)}
      />
      <TextInput
        style={styles.textField}
        placeholder="Password"
        secureTextEntry
        value={passwordField.value}
        onChangeText={(text) => passwordHelpers.setValue(text)}
      />
      <TouchableWithoutFeedback>
        <Text style={styles.button} fontSize={"subheading"}>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;
