import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import RepositoryItem from "./RepositoryItem.jsx";
import useRepositories from "../../hooks/useRepositories.js";
import { useHistory } from "react-router-native";
import ItemSeparator from "../utils/ItemSeparator.jsx";
import RNPickerSelect from "react-native-picker-select";
import { Searchbar } from "react-native-paper";

const RenderItem = ({ item, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <RepositoryItem item={item} />
    </TouchableOpacity>
  );
};

const RepositoryList = () => {
  const [sortSettings, setSortSettings] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const { repositories } = useRepositories(sortSettings, keyword);

  return (
    <View style={{ flex: 1 }}>
      <Filters setKeyword={setKeyword} setSortSettings={setSortSettings} />
      <RepositoryListContainer
        setSortSettings={setSortSettings}
        setKeyword={setKeyword}
        repositories={repositories}
        history={history}
      />
    </View>
  );
};

const Filters = ({ setSortSettings, setKeyword }) => {
  const handleChange = (value) => {
    if (!value) return;
    setSortSettings(value);
  };
  return (
    <View>
      <Searchbar onChangeText={(query) => setKeyword(query)} />
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
    </View>
  );
};

export class RepositoryListContainer extends React.Component {
  handlePress = (item) => {
    this.props.history.push(`/${item.id}`);
  };
  repositoryNodes = () => this.props.repositories
    ? this.props.repositories.edges.map((edge) => edge.node)
    : [];
  render() {
    console.log(this.repositoryNodes())
    return (
      <FlatList
        data={this.repositoryNodes()}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <RenderItem item={item} handlePress={() => this.handlePress(item)} />
        )}
      />
    );
  }
}

export default RepositoryList;
