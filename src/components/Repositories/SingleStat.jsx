import { View, StyleSheet } from "react-native";
import Text from "../Text.jsx";
import React from "react";

const SingleStat = ({ name, count }) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginTop: "5%",
    },
  });

  return (
    <View style={styles.container}>
      <Text fontWeight={"bold"} fontSize={"subheading"}>
        {count}
      </Text>
      <Text style={{ marginTop: 5 }} fontSize={"body"} color={"textSecondary"}>
        {name}
      </Text>
    </View>
  );
};

export default SingleStat;
