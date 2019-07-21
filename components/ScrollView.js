import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import SoundElement from "./SoundElement";
import soundsList from "../assets/sounds/soundsList";

function cacheFiles(file) {
  return file.map(file => {
    console.log('loading asset ' + file.name)
      return Asset.fromModule(file.link).downloadAsync();
  });
}

export default class ScrollView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: [],
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    const soundsAssets = cacheFiles(soundsList);
    await Promise.all([...soundsAssets]);
  }

  _keyExtractor = (item, index) => item.name;

  _renderItem = ({ item }) => (
    <SoundElement title={item.name} link={item.link} />
  );

  componentWillMount() {
    this.setState({ sounds: soundsList });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <FlatList
        style={style.list}
        data={this.state.sounds}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        horizontal={false}
        numColumns={3}
      />
    );
  }
}
const style = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%"
  }
});
