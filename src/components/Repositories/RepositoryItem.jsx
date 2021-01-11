import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats.jsx";
import RepositoryInfo from "./RepositoryInfo.jsx";
import Button from "../utils/Button.jsx";
import * as Linking from "expo-linking";

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

const RepositoryItem = ({ item, single }) => {
  const openGitHub = async () => {
    await Linking.openURL(item.url);
  };

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
      {single ? (
        <Button
          onPress={openGitHub}
          style={{ marginTop: 15 }}
          text={"Open in GitHub"}
        />
      ) : null}
    </View>
  );
};

export default RepositoryItem;
