import { Image, View, StyleSheet } from "react-native";
import Text from "../utils/Text.jsx";
import theme from "../../theme.js";
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
      <View style={{ marginLeft: "5%", flexShrink: 1 }}>
        <View style={{ paddingBottom: 10, flexShrink: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              testID={"repositoryFullName"}
              fontWeight={"bold"}
              fontSize={"subheading"}
            >
              {fullName}
            </Text>
          </View>

          <Text
            testID={"repositoryDescription"}
            fontSize={"body"}
            color={"textSecondary"}
            style={{ flexShrink: 1 }}
          >
            {description}
          </Text>
        </View>
        <View style={styles.language}>
          <Text
            testID={"repositoryLanguage"}
            style={{ color: "#fff", padding: 4 }}
          >
            {language}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryInfo;
