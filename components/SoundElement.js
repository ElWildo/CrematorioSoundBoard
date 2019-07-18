import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";
// import Audio from 'expo';

// const soundObject = new Audio.Sound();

export default class SoundElement extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   sound: {}
    // };
    // let soundResource = new Audio.Sound();
    // let soundSource = this.props.link;
    // const soundResource = Audio.Sound({
    //   source: soundSource
    // });

    // soundResource.loadAsync();
    // this.state = {
    //   sound: soundResource
    // };
  }

    async play() {
        console.log('culo')
    let soundResource = new Audio.Sound();
    try {
      await soundResource.loadAsync(this.props.link);
      await soundResource.setPositionAsync(0);
      await soundResource.playAsync();
    } catch(error) {
      console.log('errore on play')
      console.log(error)
    }
  }

  async componentDidMount() {
    // const soundResource = new Audio.Sound.createAsync(
    //     soundSource,
    //   (initialStatus = {}),
    //   (onPlaybackStatusUpdate = null),
    //   (downloadFirst = true)
    // );
    // let soundResource = new Audio.Sound();
    // try {
    //   await soundResource.loadAsync(this.props.link);
    //   // await soundObject.playAsync();
    //   // Your sound is playing!
    // } catch (error) {
    //   // An error occurred!
    //   console.log('errore on mount')
    // }
    // this.setState({
    //   sound: soundResource
    // });
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
