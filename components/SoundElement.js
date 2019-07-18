import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";

export default class SoundElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sound: {}
    }
  }

  async play() {
    try {
      await this.state.sound.setPositionAsync(0);
      await this.state.sound.playAsync();      
    } catch (error) {
      console.log("errore on play");
      console.log(error);
    }
  }

  async componentDidMount(){
    const soundResource = new Audio.Sound();
    try{
        await soundResource.loadAsync(this.props.link);
        this.setState({
            sound:soundResource
        })
    }catch (error) {
      console.log("errore on didMount");
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
