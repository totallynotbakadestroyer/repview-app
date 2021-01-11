import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import RepositoryItem from "./RepositoryItem.jsx";
import useRepositories from "../../hooks/useRepositories.js";
import { useHistory } from "react-router-native";
import ItemSeparator from '../utils/ItemSeparator.jsx';

const RenderItem = ({ item, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <RepositoryItem item={item} />
    </TouchableOpacity>
  );
};

export const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();
  const handlePress = (item) => {
    history.push(`/${item.id}`);
  };
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RenderItem item={item} handlePress={() => handlePress(item)} />
      )}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};
export default RepositoryList;
