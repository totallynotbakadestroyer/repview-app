import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import React from "react";
import theme from "../theme.js";
import Text from "./Text.jsx";
import FormikTextInput from "./FormikTextInput.jsx";

const SignInForm = () => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: "5%",
    },
    button: {
      backgroundColor: theme.colors.primary,
      color: "white",
      textAlign: "center",
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 15,
    },
  });

  return (
    <View style={styles.container}>
      <FormikTextInput placeholder="Username" name={"username"} />
      <FormikTextInput
        placeholder="Password"
        name={"password"}
        secureTextEntry
      />
      <TouchableWithoutFeedback>
        <Text style={styles.button} fontSize={"subheading"}>
          Sign in
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;
