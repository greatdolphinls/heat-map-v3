import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";

import { NOTIFICATIONS_SCREEN, SETTINGS_SCREEN } from "@navigator/constants";

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    switch (buttonId) {
      case "nav_setting_btn": {
        this.routeToScreen(SETTINGS_SCREEN, "Settings");
        break;
      }
      case "nav_navigation_btn": {
        this.routeToScreen(NOTIFICATIONS_SCREEN, "Notifications");
        break;
      }
      default:
        break;
    }
  }

  routeToScreen = (name, title) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: name,
        passProps: {
          // props
        },
        options: {
          topBar: {
            title: {
              text: title
            }
          },
          bottomTabs: {
            visible: false
          }
        }
      }
    });
  };

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%"
  }
});

export default HomeScreen;
