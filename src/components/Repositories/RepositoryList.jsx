import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import RepositoryItem from "./RepositoryItem.jsx";
import useRepositories from "../../hooks/useRepositories.js";
import { useHistory } from "react-router-native";
import ItemSeparator from "../utils/ItemSeparator.jsx";
import RNPickerSelect from "react-native-picker-select";

const RenderItem = ({ item, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <RepositoryItem item={item} />
    </TouchableOpacity>
  );
};

export const RepositoryListContainer = ({
  repositories,
  sortSettings,
  setSortSettings,
}) => {
  const history = useHistory();
  const handlePress = (item) => {
    history.push(`/${item.id}`);
  };
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={() => (
        <Picker sortSettings={sortSettings} setSortSettings={setSortSettings} />
      )}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RenderItem item={item} handlePress={() => handlePress(item)} />
      )}
    />
  );
};

const RepositoryList = () => {
  const [sortSettings, setSortSettings] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const { repositories } = useRepositories(sortSettings);

  return (
    <RepositoryListContainer
      setSortSettings={setSortSettings}
      repositories={repositories}
    />
  );
};

const Picker = ({ setSortSettings }) => {
  const handleChange = (value) => {
    if (!value) return;
    setSortSettings(value);
  };
  return (
    <RNPickerSelect
      onValueChange={(value) => handleChange(value)}
      items={[
        {
          label: "Latest repositories",
          value: { orderBy: "CREATED_AT", orderDirection: "DESC" },
        },
        {
          label: "Highest rated repositories",
          value: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
        },
        {
          label: "Lowest rated repositories",
          value: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
        },
      ]}
    />
  );
};

export default RepositoryList;
