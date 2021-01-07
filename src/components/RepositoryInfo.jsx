import { Image, Text, View, StyleSheet } from "react-native";
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
      backgroundColor: "#006ee3",
      borderRadius: 5,
      alignSelf: "flex-start",

    },
  });

  return (
    <View style={{ flexDirection: "row" }}>
      <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
      <View style={{ marginLeft: "5%" }}>
        <View style={{ paddingBottom: 10 }}>
          <Text style={styles.repositoryName}>{fullName}</Text>

          <Text style={{ color: "gray" }}>{description}</Text>
        </View>
        <View style={styles.language}>
          <Text style={{ color: "white", padding: 5 }}>{language}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryInfo
