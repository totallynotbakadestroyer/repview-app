import { Text, View, StyleSheet } from "react-native";
import React from "react";

const SingleStat = ({name, count}) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginTop: "5%",
    },
    statCount: {
      fontWeight: "bold",
      fontSize: 16,
    },
    statName: { color: "gray", marginTop: 5 },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.statCount}>{count}</Text>
      <Text style={styles.statName}>{name}</Text>
    </View>
  );
};

export default SingleStat
