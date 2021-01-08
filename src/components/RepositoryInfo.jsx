import { Image, View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import React from "react";

const RepositoryInfo = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  const styles = StyleSheet.create({
    avatar: {
      borderRadius: 5,
      width: 50,
      height: 50,
    },
    repositoryName: {
      fontSize: 18,
      letterSpacing: -0.5,
      fontWeight: "bold",
    },
    language: {
      backgroundColor: theme.colors.primary,
      borderRadius: 5,
      alignSelf: "flex-start",
    },
  });

  return (
    <View style={{ flexDirection: "row" }}>
      <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
      <View style={{ marginLeft: "5%" }}>
        <View style={{ paddingBottom: 10 }}>
          <Text fontWeight={"bold"} fontSize={"subheading"}>
            {fullName}
          </Text>

          <Text fontSize={"body"} color={"textSecondary"}>
            {description}
          </Text>
        </View>
        <View style={styles.language}>
          <Text style={{ color: "#fff", padding: 4 }}>{language}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryInfo;
