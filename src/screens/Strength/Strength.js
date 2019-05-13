import React, { Component } from "react";
import { View, Text } from "react-native";
import { Navigation } from "react-native-navigation";

import { NOTIFICATIONS_SCREEN, SETTINGS_SCREEN } from "@navigator/constants";
import Panel from "@components/Panel/Panel";
import { getScale } from "@utils";

const dailyWidth = getScale(1, 5 / 2).width;
const dailyHeight = getScale(1, 5 / 2).height;
const multiWidth = getScale(1, 5 / 3).width;
const multiHeight = getScale(1, 5 / 3).height;

class StrengthScreen extends Component {
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
        <Panel
          label="MAY 8, 2019 05:08:32"
          width={dailyWidth}
          height={dailyHeight}
        >
          <Text>Daily Screen</Text>
        </Panel>
        <Panel label="MULTI TIMEFRAME" width={multiWidth} height={multiHeight}>
          <Text>Multi Screen</Text>
        </Panel>
      </View>
    );
  }
}

export default StrengthScreen;
