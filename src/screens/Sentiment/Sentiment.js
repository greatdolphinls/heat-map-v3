import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";

import { NOTIFICATIONS_SCREEN, SETTINGS_SCREEN } from "@navigator/constants";
import Updown from "@components/Updown/Updown";

import { tempData } from "@services/tempData";

class SentimentScreen extends Component {
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
        <View style={styles.rowContainer}>
          {tempData.map(data => (
            <Updown
              key={data.title}
              title={data.title}
              down={data.down}
              up={data.up}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  }
});

export default SentimentScreen;
