import { View, StyleSheet } from "react-native";
import React from "react";
import SingleStat from "./SingleStat.jsx";

const RepositoryStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: "space-around",
      paddingHorizontal: "5%",
      flexDirection: "row",
    },
  });

   const numToString = (number) => {
    if (number < 1e3) return number;
    if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(1) + "k";
    if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(1) + "m";
    if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(1) + "b";
    if (number >= 1e12) return +(number / 1e12).toFixed(1) + "t";
  };

  return (
    <View style={styles.container}>
      <SingleStat
        testID={"repositoryStargazersCount"}
        name={"Stars"}
        count={numToString(stargazersCount)}
      />
      <SingleStat
        testID={"repositoryForksCount"}
        name={"Forks"}
        count={numToString(forksCount)}
      />
      <SingleStat
        testID={"repositoryReviewCount"}
        name={"Reviews"}
        count={numToString(reviewCount)}
      />
      <SingleStat
        testID={"repositoryRatingAverage"}
        name={"Rating"}
        count={numToString(ratingAverage)}
      />
    </View>
  );
};

export default RepositoryStats;
