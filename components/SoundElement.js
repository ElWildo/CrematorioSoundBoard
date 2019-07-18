import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";

export default class SoundElement extends React.Component {
  constructor(props) {
    super(props);
  }

  async play() {
    let soundResource = new Audio.Sound();
    try {
      await soundResource.loadAsync(this.props.link);
      await soundResource.setPositionAsync(0);
      await soundResource.playAsync();
    } catch (error) {
      console.log("errore on play");
      console.log(error);
    }
  }

  render() {
    return (
      <TouchableOpacity style={style.button} onPress={() => this.play()}>
        <Text style={style.buttonText}> {this.props.title} </Text>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#215c84",
    padding: 10,
    borderRadius: 5,
    margin: 5
  },
  buttonText: {
    flex: 1,
    color: "#fff",
    fontSize: 18
  }
});
