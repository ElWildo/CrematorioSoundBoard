import React from "react";
import { FlatList, StyleSheet } from "react-native";
import SoundElement from "./SoundElement";
import soundsList from "../assets/sounds/soundsList";

export default class ScrollView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: []
    };
  }

  _keyExtractor = (item, index) => item.name;

  _renderItem = ({ item }) => (
    <SoundElement title={item.name} link={item.link} />
  );

  componentWillMount() {
    this.setState({ sounds: soundsList });
  }

  render() {
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
