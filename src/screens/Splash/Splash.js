import React, { Component } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { startMainScene } from "@navigator/navigator";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1)
    };
  }

  componentDidMount() {
    const { fadeAnim } = this.state;
    const timeoutDelay = 2000;

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: timeoutDelay
      }).start(() => {
        startMainScene();
      });
    }, timeoutDelay);
  }

  render() {
    const { fadeAnim } = this.state;

    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.backgroundImage, { opacity: fadeAnim }]}
          source={require("@assets/img/splash.jpg")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});

export default SplashScreen;
