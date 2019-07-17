import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";

// const soundObject = new Audio.Sound();

export default class SoundElement extends React.Component {
  constructor(props) {
    super(props);
  }

  play = sound => {
    Audio.Sound.createAsync(
      sound,
      (initialStatus = {}),
      (onPlaybackStatusUpdate = null),
      (downloadFirst = true)
    );
  };

  render() {
      console.log(this.props.title)
    return (
        <TouchableOpacity
          style={style.button}
            onPress = {
                this.play(this.props.link)
            }
        >
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
