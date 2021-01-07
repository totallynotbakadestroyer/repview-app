import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats.jsx";
import RepositoryInfo from "./RepositoryInfo.jsx";

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    flexDirection: "column",
  },
  tinyLogo: {
    borderRadius: 5,
    width: 50,
    height: 50,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryInfo
        language={item.language}
        description={item.description}
        fullName={item.fullName}
        ownerAvatarUrl={item.ownerAvatarUrl}
      />
      <RepositoryStats
        stargazersCount={item.stargazersCount}
        forksCount={item.forksCount}
        reviewCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
